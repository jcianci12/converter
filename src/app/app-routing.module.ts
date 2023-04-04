import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { JsonToCSVComponent } from './jsontocsv/JsontoCSV.component';
import { HomeComponent } from './home/home.component';
import { KMZComponent } from './mapping/kmzedit/KMZComponent.component';
import { NpmproxygeneratorComponent } from './npmproxygenerator/npmproxygenerator.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RecipeconverterComponent } from './recipeconverter/recipeconverter.component';
import { CSVtoJSONComponent } from './csvto-json/csvto-json.component';

const routes: Routes = [
  { path: 'jsontocsv', component: JsonToCSVComponent,data :{title:"JSON to CSV"} },
  { path: 'csvtojson', component: CSVtoJSONComponent,data :{title:"CSV to JSON"} },

  { path: '', component: HomeComponent },
  { path: 'kmledit', component: KMZComponent },
  { path: 'recipeconverter', component: RecipeconverterComponent },
  {path:'npmproxgen',component: NpmproxygeneratorComponent, data :{title:"NPM Corporate Proxy Configuration Helper"}},

  { path: '**', component: PagenotfoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


