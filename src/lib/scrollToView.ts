/**
 * Options for scroll behavior and alignment.
 */
interface ScrollOptions {
  behavior?: "auto" | "smooth";
  block?: "start" | "center" | "end" | "nearest";
  inline?: "start" | "center" | "end" | "nearest";
}

/**
 * Scrolls to an element by ID or ref with smooth behavior.
 * @param target - Element ID or React ref.
 * @param options - Scroll options.
 */
export const scrollToView = <T extends HTMLElement>(
  target: string | React.RefObject<T>,
  options: ScrollOptions = {},
): void => {
  const { behavior = "smooth", block = "center", inline = "nearest" } = options;

  let element: HTMLElement | null = null;

  // Handle string (ID) or ref
  if (typeof target === "string") {
    element = document.getElementById(target);
  } else if (target && "current" in target) {
    element = target.current;
  }

  // Scroll to element if found
  if (element) {
    element.scrollIntoView({
      behavior,
      block,
      inline,
    });
  } else {
    console.warn("scrollToView: Element not found");
  }
};
