class ProposalMailer < ApplicationMailer
	def email(proposal)
		@proposal = proposal
		mail(to: @proposal.client_email, subject: "you have received a new proposal")
	end
end
