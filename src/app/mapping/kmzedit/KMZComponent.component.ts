import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NgxFileDropEntry } from 'ngx-file-drop';
declare var L: any;

@Component({
  selector: 'app-KMZComponent',
  templateUrl: './KMZComponent.component.html',
  styleUrls: ['./KMZComponent.component.scss']
})
export class KMZComponent implements OnInit, AfterViewInit {

  @ViewChild('mapElement') mapElement: ElementRef;
  _files: NgxFileDropEntry[]
  get files(): NgxFileDropEntry[] {
    return this._files
  }
  set files(files: NgxFileDropEntry[]) {
    this._files = files
    this.fetchFile(this._files)

  }

  async fetchFile(files: NgxFileDropEntry[]) {
    var control = L.control.layers(null, null, { collapsed: false }).addTo(this.mapobject);

    // Instantiate KMZ layer (async)
    var kmz = L.kmzLayer().addTo(this.mapobject);

    kmz.on('load', function (e) {
      control.addOverlay(e.layer, e.name);
      // e.layer.addTo(map);
    });

    // Add remote KMZ files as layers (NB if they are 3rd-party servers, they MUST have CORS enabled)
console.log(files[0])
    let file = URL.createObjectURL(files[0] as any)

    let blob = await fetch(file).then(r => r.blob());
    kmz.load(new FileReader().readAsDataURL(blob));
  }


  mapobject
  constructor(private rd: Renderer2) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.mapElement)
    let elementid = this.mapElement.nativeElement.id

    console.log(elementid)

    this.mapobject = L.map(elementid, {
      preferCanvas: true // recommended when loading large layers.
    });
    this.mapobject.setView(new L.LatLng(-27.5, 153), 8);

    var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
      opacity: 0.90
    });
    OpenTopoMap.addTo(this.mapobject);

    // Instantiate KMZ layer (async)
    var kmz = L.kmzLayer().addTo(this.mapobject);

    kmz.on('load', function (e) {
      control.addOverlay(e.layer, e.name);
      // e.layer.addTo(map);
    });

    // Add remote KMZ files as layers (NB if they are 3rd-party servers, they MUST have CORS enabled)
    kmz.load('LGA_HHS_Nov2012.kmz');


    var control = L.control.layers(null, null, { collapsed: false }).addTo(this.mapobject);
  }

}
