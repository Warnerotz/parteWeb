import {
  Directive,
  EventEmitter,
  ElementRef,
  HostListener,
  Input,
  Output
} from "@angular/core";
import { FileItem } from "../modelos/fileItem";

@Directive({
  selector: "[appNgDropFiles]"
})
export class NgDropFilesDirective {
  @Input() archivos: FileItem[] = [];
  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  @HostListener("dragover", ["$event"])
  public onDragEnter(event: any) {
    this.mouseSobre.emit(true);
    this._prevent(event);
  }

  @HostListener("dragleave", ["$event"])
  public onDragleave(event: any) {
    this.mouseSobre.emit(false);
    this._prevent(event);
  }

  @HostListener("drop", ["$event"])
  public onDrop(event: any) {
    const transfer = this._getTransfer(event);

    if (!transfer) {
      this.mouseSobre.emit(false);
      this._prevent(event);
      return;
    }

    this._extractFiles(transfer.files);
    this._prevent(event);
    this.mouseSobre.emit(false);
  }

  //para los distintos navegadores q interpretan el drag and drop
  private _getTransfer(event: any) {
    return event.dataTransfer
      ? event.dataTransfer
      : event.originalEvent.dataTransfer;
  }

  private _extractFiles(archivosLista: FileList) {
    //para pasar el objeto con dos elementos a un array de elementos
    for (const property in Object.getOwnPropertyNames(archivosLista)) {
      const tempFile = archivosLista[property];
      if (this._canLoadArchive(tempFile)) {
        const newFile = new FileItem(tempFile);
        this.archivos.push(newFile);
      }
    }
  }

  //validations

  private _canLoadArchive(archivo: File) {
    if (!this._archiveWasDropped(archivo.name) && this._isVideo(archivo.type)) {
      return true;
    }

    return false;
  }

  private _prevent(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  private _archiveWasDropped(nombreArchivo: string) {
    for (const archivo of this.archivos) {
      if (archivo.nombreArchivo == nombreArchivo) {
        console.log("El archivo" + nombreArchivo + "ya esta agregado");
        return true;
      }
    }
    return false;
  }

  private _isVideo(tipoArchivo: string) {
    return tipoArchivo === "" || tipoArchivo === undefined
      ? false
      : tipoArchivo.startsWith("video");
  }
}
