import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { Root } from './Root/Root';
import { NgMod } from './NgMod';

@NgModule({
    imports: [NgMod, ServerModule, ModuleMapLoaderModule],
  bootstrap: [Root]
})
export class NgMod_Server { }
