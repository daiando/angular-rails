import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css']
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'ABC, Inc.', 'http://portfolio.daiando.com', 'Ruby on Rails', 150, 120, 15, 'foobar@devcamp.com')
  proposalTwo: Proposal = new Proposal(99, 'XYZ, Inc.', 'http://portfolio.daiando.com', 'Ruby on Rails', 150, 120, 15, 'foobar@devcamp.com')
  proposalThree: Proposal = new Proposal(300, 'SVRADM, Inc.', 'http://portfolio.daiando.com', 'Ruby on Rails', 150, 120, 15, 'foobar@devcamp.com')

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}
