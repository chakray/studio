import { Input, Component, HostBinding, OnInit,
  ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-lander-section',
  templateUrl: './section.tag.html',
  styleUrls: ['./section.tag.sass'],
})
export class AlSectionTag implements OnInit {
  @Input() tag: any;
  @Input() ctx: any;
  @ViewChild('box', { read: ViewContainerRef }) box: ViewContainerRef;
  constructor(
    private fr: ComponentFactoryResolver) {
  }
  ngOnInit() {
    if (!this.tag) { return; }
    const factory = this.fr.resolveComponentFactory(this.tag);
    const ref = this.box.createComponent(factory);
    (ref.instance as any).ctx = this.ctx;
  }
}
