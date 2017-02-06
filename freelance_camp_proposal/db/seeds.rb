# -- public id?: number,
# -- public customer?: string,
# -- public portfolio_url: string = 'http://',
# -- public tools?: string,
# -- public estimated_hours?: number,
# -- public hourly_rate?: number,
# -- public weeks_to_complete?: number,
# -- public client_email?: string,

Proposal.create!(
  customer?: string,
  portfolio_url: string = 'http://',
  tools?: string,
  estimated_hours?: number,
  hourly_rate?: number,
  weeks_to_complete?: number,
  client_email?: string,
)
