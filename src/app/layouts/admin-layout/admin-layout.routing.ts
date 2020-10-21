import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import {ForumComponent} from '../../Forum/forum/forum.component';
import {CalendarComponent} from '../../calendar/calendar.component';
import {ProfilComponent} from '../../components/profil/profil.component';
import {DiagramComponent} from '../../diagram/diagram.component';
import {ChartComponent} from '../../chart/chart.component';
import {RegistrationdoneComponent} from '../../registrationdone/registrationdone.component';
import {EmailconfirmComponent} from "../../components/emailconfirm/emailconfirm.component";


export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'forum', component: ForumComponent},
    { path: 'schedule', component: CalendarComponent},
    { path: 'profile', component: ProfilComponent},
    { path: 'diagram', component: DiagramComponent},
    { path: 'chart', component: ChartComponent},
    { path: 'registrationdone', component: RegistrationdoneComponent},
    { path: 'emailconfirm', component: EmailconfirmComponent}
    
];
