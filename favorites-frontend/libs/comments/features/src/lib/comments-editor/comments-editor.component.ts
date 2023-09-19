import { Component, OnInit } from '@angular/core';
import { Comment, CommentsDataService } from '../comments-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom, map } from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-comments-editor',
  templateUrl: './comments-editor.component.html',
  styleUrls: ['./comments-editor.component.scss'],
})
export class CommentsEditorComponent implements OnInit {
  public form = this.fb.nonNullable.group({
    content: [''],
  });
  public comment?: Comment;

  constructor(
    private service: CommentsDataService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}
  async ngOnInit(): Promise<void> {
    const params = await firstValueFrom(this.activatedRoute.params);
    const id = params['id'];
    this.comment = this.service.byId(id);
    this.form.patchValue(this.comment);
  }

  public submit(): void {
    if (this.form.valid && this.comment) {
      this.service.update({
        ...this.comment,
        ...this.form.value,
      });

      this.router.navigate([this.comment.reference], { relativeTo: this.activatedRoute.parent });
    }
  }
}
