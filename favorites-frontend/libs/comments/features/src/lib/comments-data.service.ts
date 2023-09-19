import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsDataService {
  private comments: Comment[] = [
    {
      id: '1',
      reference: 'fav-1',
      content: 'This is a comment'
    },
    {
      id: '2',
      reference: 'fav-1',
      content: 'This is another comment'
    },
    {
      id: '3',
      reference: 'fav-2',
      content: 'This is a different comment'
    }
  ];

  public byReference(reference: string): Comment[] {
    return this.comments.filter((comment) => comment.reference === reference);
  }

  public byId(id: string): Comment {
    return this.comments.find((comment) => comment.id === id) as Comment;
  }

  public create(comment: Comment): Comment {
    const id = (this.comments.length + 1).toString();
    const newComment = {
      ...comment,
      id: id
    };

    this.comments.push(newComment);

    return newComment;
  }

  public update(comment: Comment): Comment {
    const existingComment = this.comments.find(
      (c) => c.id === comment.id
    ) as Comment;

    const updatedComment = {
      ...existingComment,
      ...comment
    };

    this.comments = this.comments.map((c) =>
      c.id === comment.id ? updatedComment : c
    );

    return updatedComment;
  }

  public delete(id: string): void {
    this.comments = this.comments.filter((comment) => comment.id !== id);
  }
}


export interface Comment {
  id: string;
  reference: string;
  content: string;
}
