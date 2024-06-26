import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule],
})
export class AppComponent {
  componentTitle = "My To Do List";

  //filter: "all" | "active" | "done" = "all";
filler:"all" | " active"| "done" = "all";
  allItems = [
    { description: "eat", done: true },
    { description: "sleep", done: false },
    { description: "play", done: false },
    { description: "laugh", done: false },
  ];

  get items() {
    if (this.filler === "all") {
      return this.allItems;
      
    }
    return this.allItems.filter((item) =>
      
      this.filler === "done" ? console.log(item.done) : !item.done
    
    );
    
  }
  addItem(description: string) {
  if (!description) return;
  console.log(description)
 this.allItems.unshift({
    description,
    done: false
    
  });
  
  

}
// deleteItem(todo:number){
//   this.allItems.splice(todo)
// }
}
