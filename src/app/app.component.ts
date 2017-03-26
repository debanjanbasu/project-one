import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
    title = 'app works!! With Title Service';
    constructor(private titleService: Title) { }

    ngOnInit(): void {
        this.titleService.setTitle('Project One -- Home -- Welcome');
    }
}
