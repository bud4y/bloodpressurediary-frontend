import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CarouselComponent } from './carousel/carousel.component';
import {NgbCarouselModule, NgbCollapseModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { DropDownBasicComponent } from './dropdown-basic/dropdown-basic.component';
import { CollapseBasicComponent } from './Collapse/collapse-basic/collapse-basic.component';
import { ProfilComponent } from './profil/profil.component';
import {MatInputModule} from '@angular/material/input';
import { EmailconfirmComponent } from './emailconfirm/emailconfirm.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgbCarouselModule,
        NgbDropdownModule,
        NgbCollapseModule,
        MatInputModule,
    ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CarouselComponent,
    DropDownBasicComponent,
    CollapseBasicComponent,
      ProfilComponent,
      EmailconfirmComponent,
  ],
    exports: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        CarouselComponent,
        DropDownBasicComponent,
        CollapseBasicComponent,
        ProfilComponent
    ]
})
export class ComponentsModule { }
