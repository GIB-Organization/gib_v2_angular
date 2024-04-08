import { inject } from "@angular/core";
import { ChildrenOutletContexts } from "@angular/router";

export class AnimationsContext {
    public contexts = inject(ChildrenOutletContexts);

    getRouteAnimationData() {
        return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
    }
}