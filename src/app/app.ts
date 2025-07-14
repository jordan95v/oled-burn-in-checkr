import { Component, ElementRef, signal, ViewChild, WritableSignal } from "@angular/core"

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
    @ViewChild("cycleDiv") cycleDiv!: ElementRef<HTMLDivElement>

    /**
     * Lifecycle hook that is called after the view has been fully initialized.
     * This method is used to set focus on the cycleDiv element to ensure it can receive keyboard events after hiding the interface.
     *
     * @remarks
     * This is necessary to receive keyboard events after hiding the interface a second time.
     */
    ngAfterViewChecked(): void {
        if (this.cycleDiv) {
            this.cycleDiv.nativeElement.focus()
        }
    }

    /**
     * Parses an RGB color string and converts it to hexadecimal format.
     *
     * @param color - The RGB color string to parse (e.g., "rgb(255, 128, 0)" or "255, 128, 0")
     * @returns The color in hexadecimal format (e.g., "#ff8000") or the original string if parsing fails
     */
    private parseRgb(color: string): string {
        const rgbMatch: RegExpMatchArray | null = color.match(/\d+/g)
        if (!rgbMatch) {
            return color
        }
        const r: number = parseInt(rgbMatch[0])
        const g: number = parseInt(rgbMatch[1])
        const b: number = parseInt(rgbMatch[2])
        return `#${[r, g, b]
            .map((value) => value.toString(16).padStart(2, "0"))
            .join("")}`
    }

    /**
     * Cycles through background colors based on keyboard arrow key input.
     *
     * @param event - The keyboard event containing the pressed key
     *
     * @remarks
     * - Right arrow key advances to the next color in the sequence
     * - Left arrow key moves to the previous color in the sequence
     * - Other keys are ignored and cause early return
     * - Colors cycle infinitely in both directions
     */
    public cycleColors(event: KeyboardEvent): void {
        let currentColor: string = document.documentElement.style.backgroundColor
        if (currentColor.startsWith("rgb")) {
            currentColor = this.parseRgb(currentColor)
        }
        let currentIndex: number = this.colors.indexOf(currentColor) || 0
        switch (event.key) {
            case "ArrowRight":
                currentIndex = (currentIndex + 1) % this.colors.length
                break
            case "ArrowLeft":
                currentIndex =
                    (currentIndex - 1 + this.colors.length) % this.colors.length
                break
            default:
                return
        }
        document.documentElement.style.backgroundColor = this.colors[currentIndex]
    }

    /**
     * Changes the background color of the document's root element.
     *
     * @param color - The desired background color as a string. This can be any valid CSS color value.
     */
    public changeBackgroundColor(color: string): void {
        document.documentElement.style.backgroundColor = color
    }

    /**
     * Resets the theme by removing the "background-color" property from the root HTML element's inline styles.
     */
    public resetTheme(): void {
        document.documentElement.style.removeProperty("background-color")
    }

    /**
     * Toggles the current state of the `hide` property.
     * If `hide` is currently `true`, it will be set to `false`, and vice versa.
     */
    public toggleInterface(): void {
        this.hide.set(!this.hide())
    }

    /**
     * Toggles the fullscreen mode of the application.
     * If the document is currently in fullscreen mode, it will exit fullscreen.
     * If the document is not in fullscreen mode, it will request fullscreen on the document element.
     */
    public toggleFullscreen(): void {
        if (document.fullscreenElement) {
            document.exitFullscreen()
        } else {
            document.documentElement.requestFullscreen()
        }
    }
}
