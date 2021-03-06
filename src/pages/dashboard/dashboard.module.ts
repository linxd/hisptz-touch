/*
 *
 * Copyright 2015 HISP Tanzania
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 * MA 02110-1301, USA.
 *
 * @since 2015
 * @author Joseph Chingalo <profschingalo@gmail.com>
 *
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DashboardPage } from './dashboard';

import { containers } from './containers';
import { reducers, effects } from './store';
import { services } from './services';
import { VisualizationPageModule } from '../visualization/visualization.module';
import { TranslateModule } from '@ngx-translate/core';
import { sharedComponentsModule } from '../../components/sharedComponents.module';

@NgModule({
  declarations: [...containers, DashboardPage],
  imports: [
    IonicPageModule.forChild(DashboardPage),
    VisualizationPageModule,
    sharedComponentsModule,
    StoreModule.forFeature('dashboard', reducers),
    EffectsModule.forFeature(effects),
    TranslateModule.forChild()
  ],
  providers: [...services]
})
export class DashboardPageModule {}
