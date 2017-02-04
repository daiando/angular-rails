import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {
      title: "My First Doc",
      description: 'react angular rails !',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'http://www.betatron.co/uploads/9/0/9/4/90942584/pic22.jpg',
    },
    {
      title: "My Second Doc",
      description: 'foobar foobar',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'http://www.betatron.co/uploads/9/0/9/4/90942584/pic22.jpg',
    },
    {
      title: "My Third Doc",
      description: 'hello world !',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'http://www.betatron.co/uploads/9/0/9/4/90942584/pic22.jpg',
    },
  ]
}
