import {Component} from '@angular/core'
import {HomePage} from '../home/home';
import {MainPage} from '../main/main';
import {ContactPage} from '../contact/contact';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.tab2Root = MainPage;
    this.tab3Root = ContactPage;
  }
}
