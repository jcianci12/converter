import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ValidjsonPipe } from './validjson.pipe';
import { PreviewdataComponent } from './previewdata/previewdata.component';
import { ToheaderPipe } from './toheader.pipe';
import { TorowsPipe } from './torows.pipe';
import { HomeComponent } from './home/home.component';
import { TableheaderComponent } from './previewdata/tableheader/tableheader.component';
import { TablerowComponent } from './previewdata/tablerow/tablerow.component';
import { DisplaykeyvalueComponent } from './previewdata/displaykeyvalue/displaykeyvalue.component';
import { IsstringPipe } from './isstring.pipe';
import { IsarrayPipe } from './isarray.pipe';
import { IsobjectPipe } from './isobject.pipe';
import { IsnullPipe } from './isnull.pipe';
import { DisplayobjectComponent } from './previewdata/displayobject/displayobject.component';
import { TotablePipe } from './totable.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { KMZComponent } from './mapping/kmzedit/KMZComponent.component';
import { RecipeconverterComponent } from './recipeconverter/recipeconverter.component';
import { IngredientComponent } from './recipeconverter/ingredient/ingredient.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipePipe } from './recipe.pipe';
import { NpmproxygeneratorComponent } from './npmproxygenerator/npmproxygenerator.component';
import { NpmconfigstringPipe } from './npmconfigstring.pipe';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { NpmconfigclipboardstringPipe } from './npmconfigclipboardstring.pipe';
import { JsonToCSVComponent } from './jsontocsv/JsontoCSV.component';
import { JsontocsvPipe } from './jsontocsv.pipe';
import { CSVtoJSONComponent } from './csvto-json/csvto-json.component';
import { CsvtojsonPipe } from './csvtojson.pipe';
import { JSONparsePipe } from './jsonparse.pipe';
import { JsonheadersPipe } from './jsonheaders.pipe';

@NgModule({
  declarations: [
    AppComponent,

    PagenotfoundComponent,
    ValidjsonPipe,
    PreviewdataComponent,
    ToheaderPipe,
    TorowsPipe,
    HomeComponent,
    TableheaderComponent,
    TablerowComponent,
    DisplaykeyvalueComponent,
    IsstringPipe,
    IsarrayPipe,
    IsobjectPipe,
    IsnullPipe,
    DisplayobjectComponent,
    TotablePipe,
    NavbarComponent,
    FileuploadComponent,
    KMZComponent,
    RecipeconverterComponent,
    IngredientComponent,
    RecipePipe,
    NpmproxygeneratorComponent,
    NpmconfigstringPipe,
    NpmconfigclipboardstringPipe,
JsonToCSVComponent,
JsontocsvPipe,
CSVtoJSONComponent,
CsvtojsonPipe,
JSONparsePipe,
JsonheadersPipe
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgxFileDropModule,MaterialModule, BrowserAnimationsModule,ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
