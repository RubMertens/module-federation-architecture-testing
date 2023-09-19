import { Component } from '@angular/core';
import { CommentsDataService } from '../comments-data.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-comments-overview-list',
  templateUrl: './comments-overview-list.component.html',
  styleUrls: ['./comments-overview-list.component.scss'],
})
export class CommentsOverviewListComponent {
  public comments$ = this.activatedRoute.params.pipe(
    map((params) => params['reference']),
    map((reference) => this.service.byReference(reference))
  );

  constructor(
    public service: CommentsDataService,
    private activatedRoute: ActivatedRoute
  ) {}
}
