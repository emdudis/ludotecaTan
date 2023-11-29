import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryEditComponent } from '../category-edit/category-edit.component';
import { CategoryService } from '../category.service';
import { Category } from '../model/Category';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmationComponent } from 'src/app/core/dialog-confirmation/dialog-confirmation.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {

  dataSource = new MatTableDataSource<Category>();
  displayedColumns: string[] = ['id', 'name', 'action'];

  constructor(
    private categoryService: CategoryService,
    public dialog: MatDialog,
  ){}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      categories => this.dataSource.data = categories
    );
  }

  createCategory(){
    const dialogRef = this.dialog.open(CategoryEditComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  editCategory(category: Category){
    const dialogRef = this.dialog.open(CategoryEditComponent, {
      data: {category: category}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  deleteCategory(category: Category){
    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
      data: {
          title: "Eliminar Categoría",
          description: "Atención si borra la categoría se perderán sus datos. <br> ¿Desea eliminar la categoría?",
        }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.categoryService.deleteCategory(category.id).subscribe(result => {
          this.ngOnInit();
        });
      }
    });
  }
}
