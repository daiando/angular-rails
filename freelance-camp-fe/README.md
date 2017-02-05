## debug memo :: postgres for mac

##### debug-01(role does not exist)
```bash
brew services start postgresql
# ==> Successfully started `postgresql` (label: homebrew.mxcl.postgresql)
brew services list
rails db:create
# role "xxxx" does not exist
brew services stop postgresql
# ==> Successfully stopped `postgresql` (label: homebrew.mxcl.postgresql)
```

##### debug-02

```bash
vim config/databse.yml
```

```yaml:config/database.yml

default: &default
  adapter: postgresql
  encoding: unicode
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>

development:
  <<: *default
  database: freelance_camp_documents_development
  # The specified database role being used to connect to postgres.
  # To create additional roles in postgres see `$ createuser --help`.
  # When left blank, postgres will use the default role. This is
  # the same name as the operating system user that initialized the database.
  username: freelance
  password: freelance


test:
  <<: *default
  database: freelance_camp_documents_test


production:
  <<: *default
  database: freelance_camp_documents_production
  username: freelance_camp_documents
  password: <%= ENV['FREELANCE_CAMP_DOCUMENTS_DATABASE_PASSWORD'] %>
```

##### debug-03 (PG::InsufficientPrivilege: ERROR:  permission denied to create database)

```bash
brew services start postgresql
# ==> Successfully started `postgresql` (label: homebrew.mxcl.postgresql)
createuser -P freelance
Enter password for new role:
Enter it again:
rails db:create
# PG::InsufficientPrivilege: ERROR:  permission denied to create database
```

```bash
createdb freelance_camp_documents_development -O freelance -E unicode
psql -l
List of databases
Name                 |   Owner   | Encoding |   Collate   |    Ctype    |  Access privileges
--------------------------------------+-----------+----------+-------------+-------------+---------------------
freelance_camp_documents_development | freelance | UTF8     | ja_JP.UTF-8 | ja_JP.UTF-8 |

psql freelance_camp_documents_development
psql (9.6.1)
Type "help" for help.

freelance_camp_documents_development=# \du
                                   List of roles
 Role name |                         Attributes                         | Member of
-----------+------------------------------------------------------------+-----------
 daiando   | Superuser, Create role, Create DB, Replication, Bypass RLS | {}
 freelance |                                                            | {}

freelance_camp_documents_development=# ALTER ROLE freelance WITH CREATEDB;
ALTER ROLE
freelance_camp_documents_development=# \du
                                   List of roles
 Role name |                         Attributes                         | Member of
-----------+------------------------------------------------------------+-----------
 daiando   | Superuser, Create role, Create DB, Replication, Bypass RLS | {}
 freelance | Create DB                                                  | {}
```

```bash
rails db:create
Database 'freelance_camp_documents_development' already exists
Created database 'freelance_camp_documents_test'
```

## conclusion

- need to add username & password for `config/database.yml`
- need to run postgres service previously
- need to create #{username} with #{password} by using `createdb` command.
- maybe just need to hit `initdb` after installing postgres ?
- maybe `brew install postgres` do `initdb` at the sametime.
- then why such error has happened ?
- this is because pg gem & postgresql itself had not been installed when I hit `rails new`.
- so We dont have to change config/database.yml because `rails db:create` command makes it possible to create new DB by your pc username since this is default username for postgres.

```bash
rails new my_app -T -d postgresql
brew install postgresql
(brew service start postgresql) # if needed
rails db:create
psql -l
                                              List of databases
                 Name                 |  Owner     | Encoding |   Collate   |    Ctype    |  Access privileges
--------------------------------------+---------+----------+-------------+-------------+---------------------
 freelance_camp_documents_development | pcusername | UTF8     | ja_JP.UTF-8 | ja_JP.UTF-8 |
 freelance_camp_documents_test        | pcusername | UTF8     | ja_JP.UTF-8 | ja_JP.UTF-8 |
```
