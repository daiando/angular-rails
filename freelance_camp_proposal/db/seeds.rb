
10.times do |proposal|
  Proposal.create!(
    customer: "Customer #{proposal}",
    portfolio_url: 'http://portfolio.jourdanhudgens.com',
    tools: 'Ruby on Rails, Angular2, postgresql',
    estimated_hours: (80 + proposal),
    hourly_rate: 120,
    weeks_to_complete: 12,
    client_email: 'jordan@devcamp.com'
  )
end
