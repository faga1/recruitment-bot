import React from "react";

export function withHook(Target) {
    const render = Target.prototype.render;

    Target.prototype.render = function() {
        let Component = this.__HOOK_RENDER__;

        if (!Component) {
            Component = this.__HOOK_RENDER__ = render.bind(this);
        }

        return <Component />;
    };

    return Target;
}
