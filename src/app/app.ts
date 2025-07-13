import { Component, signal, WritableSignal } from "@angular/core"

@Component({
    selector: "app-root",
    templateUrl: "./app.html",
})
export class App {
    public hide: WritableSignal<boolean> = signal(false)
    public colors: string[] = [
        "#ffffff", // White
        "#e0e0e0", // Light Gray
        "#b0b0b0", // Gray
        "#808080", // Dark Gray
        "#000000", // Black
        "#ff0000", // Red
        "#00ff00", // Green
        "#0000ff", // Blue
        "#ffff00", // Yellow
        "#00ffff", // Cyan
    ]

    /**
     * Toggles the current state of the `hide` property.
     * If `hide` is currently `true`, it will be set to `false`, and vice versa.
     */
    public toggle(): void {
        this.hide.set(!this.hide())
    }

    /**
     * Enables fullscreen mode for the entire document.
     * This method requests the browser to display the document
     * in fullscreen mode by calling `requestFullscreen` on the
     * root HTML element (`document.documentElement`).
     *
     * Note: Fullscreen functionality may require user interaction
     * and can be subject to browser-specific restrictions.
     */
    public fullscreen(): void {
        document.documentElement.requestFullscreen()
    }

    /**
     * Resets the theme by removing the "background-color" property from the root HTML element's inline styles.
     */
    public resetTheme(): void {
        document.documentElement.style.removeProperty("background-color")
    }

    /**
     * Changes the background color of the document's root element.
     *
     * @param color - The desired background color as a string. This can be any valid CSS color value.
     */
    public changeBackgroundColor(color: string): void {
        document.documentElement.style.backgroundColor = color
    }
}
