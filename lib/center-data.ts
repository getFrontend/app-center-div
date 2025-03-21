// Types for centering methods
export type CenteringDirection = "horizontal" | "vertical" | "both"

export interface CenteringMethod {
  id: string
  name: string
  description: string
  pros: string[]
  cons: string[]
  horizontalCode: string
  verticalCode: string
  bothCode: string
  demoComponent: (direction: CenteringDirection) => string | { parent: string; child: string }
}

// All centering methods data
export const centeringMethods: CenteringMethod[] = [
  {
    id: "flexbox",
    name: "Flexbox ⭐",
    description: "The modern way to center elements using flexible box layout.",
    pros: ["Easy to use", "Works for multiple elements", "Responsive"],
    cons: ["Not supported in very old browsers like IE 6-9"],
    horizontalCode: `
.parent {
  display: flex;
  justify-content: center;
}`,
    verticalCode: `
.parent {
  display: flex;
  align-items: center;
}`,
    bothCode: `
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
    demoComponent: (direction: CenteringDirection) => {
      const styles = {
        horizontal: "flex justify-center items-start",
        vertical: "flex items-center justify-start h-full",
        both: "flex justify-center items-center",
      }
      return styles[direction]
    },
  },
  {
    id: "grid",
    name: "CSS Grid",
    description: "Using CSS Grid's powerful alignment capabilities.",
    pros: ["Simple syntax for centering", "Great for 2D layouts", "Modern approach"],
    cons: ["Overkill for simple centering tasks"],
    horizontalCode: `
.parent {
  display: grid;
  justify-content: center;
}`,
    verticalCode: `
.parent {
  display: grid;
  align-items: center;
}`,
    bothCode: `
.parent {
  display: grid;
  place-items: center;
}`,
    demoComponent: (direction: CenteringDirection) => {
      const styles = {
        horizontal: "grid justify-items-center",
        vertical: "grid items-center h-full",
        both: "grid place-items-center",
      }
      return styles[direction]
    },
  },
  {
    id: "absolute",
    name: "Absolute Positioning + Transform",
    description: "Using absolute positioning with transform for precise centering.",
    pros: ["Works in most browsers", "Precise positioning"],
    cons: ["Requires position: relative on parent", "Can be complex"],
    horizontalCode: `
.parent {
  position: relative;
}
.child {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}`,
    verticalCode: `
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}`,
    bothCode: `
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`,
    demoComponent: (direction: CenteringDirection) => {
      const styles = {
        horizontal: "relative",
        vertical: "relative",
        both: "relative",
      }
      const childStyles = {
        horizontal: "absolute left-1/2 -translate-x-1/2",
        vertical: "absolute top-1/2 -translate-y-1/2",
        both: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
      }
      return { parent: styles[direction], child: childStyles[direction] }
    },
  },
  {
    id: "margin-auto",
    name: "Margin Auto",
    description: "The classic approach using automatic margins.",
    pros: ["Simple syntax", "Great browser support"],
    cons: ["Only works horizontally by default", "Requires fixed width on child"],
    horizontalCode: `
.child {
  margin-left: auto;
  margin-right: auto;
  width: 100px; /* Fixed width required */
}`,
    verticalCode: `
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  height: 100px; /* Fixed height required */
}`,
    bothCode: `
.parent {
  display: flex;
}
.child {
  margin: auto;
  width: 100px; /* Fixed dimensions required */
  height: 100px;
}`,
    demoComponent: (direction: CenteringDirection) => {
      const styles = {
        horizontal: "",
        vertical: "relative h-full",
        both: "flex h-full",
      }
      const childStyles = {
        horizontal: "mx-auto w-24",
        vertical: "absolute top-0 bottom-0 my-auto h-24",
        both: "m-auto w-24 h-24",
      }
      return { parent: styles[direction], child: childStyles[direction] }
    },
  },
  {
    id: "table",
    name: "Table Cell Method",
    description: "Using CSS table display properties for centering.",
    pros: ["Good for vertical alignment", "Works in older browsers"],
    cons: ["Somewhat outdated approach", "Can affect layout structure"],
    horizontalCode: `
.parent {
  display: table;
  width: 100%;
}
.child {
  display: table-cell;
  text-align: center;
}`,
    verticalCode: `
.parent {
  display: table;
  height: 200px;
}
.child {
  display: table-cell;
  vertical-align: middle;
}`,
    bothCode: `
.parent {
  display: table;
  width: 100%;
  height: 200px;
}
.child {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}`,
    demoComponent: (direction: CenteringDirection) => {
      const styles = {
        horizontal: "table w-full",
        vertical: "table h-full",
        both: "table w-full h-full",
      }
      const childStyles = {
        horizontal: "table-cell text-center",
        vertical: "table-cell align-middle",
        both: "table-cell text-center align-middle",
      }
      return { parent: styles[direction], child: childStyles[direction] }
    },
  },
  {
    id: "calc",
    name: "Calc Function",
    description: "Using CSS calc() function to calculate exact center position.",
    pros: ["Precise positioning", "No transforms needed"],
    cons: ["Requires knowing parent dimensions", "Less flexible than other methods"],
    horizontalCode: `
.parent {
  position: relative;
  width: 300px;
}
.child {
  position: absolute;
  width: 100px;
  left: calc(50% - 50px);
}`,
    verticalCode: `
.parent {
  position: relative;
  height: 200px;
}
.child {
  position: absolute;
  height: 100px;
  top: calc(50% - 50px);
}`,
    bothCode: `
.parent {
  position: relative;
  width: 300px;
  height: 200px;
}
.child {
  position: absolute;
  width: 100px;
  height: 100px;
  left: calc(50% - 50px);
  top: calc(50% - 50px);
}`,
    demoComponent: (direction: CenteringDirection) => {
      const styles = {
        horizontal: "relative",
        vertical: "relative h-full",
        both: "relative h-full",
      }
      const childStyles = {
        horizontal: "absolute w-24 left-[calc(50%-3rem)]",
        vertical: "absolute h-24 top-[calc(50%-3rem)]",
        both: "absolute w-24 h-24 left-[calc(50%-3rem)] top-[calc(50%-3rem)]",
      }
      return { parent: styles[direction], child: childStyles[direction] }
    },
  },
  {
    id: "flex-align-self",
    name: "Flexbox with Align-self",
    description: "Using flexbox with align-self for individual item alignment.",
    pros: ["Targets specific items", "Flexible and powerful"],
    cons: ["Requires flexbox context", "More complex than basic flexbox"],
    horizontalCode: `
.parent {
  display: flex;
}
.child {
  align-self: center;
  margin-left: auto;
  margin-right: auto;
}`,
    verticalCode: `
.parent {
  display: flex;
  flex-direction: column;
}
.child {
  align-self: center;
}`,
    bothCode: `
.parent {
  display: flex;
  flex-direction: column;
}
.child {
  align-self: center;
  margin-left: auto;
  margin-right: auto;
}`,
    demoComponent: (direction: CenteringDirection) => {
      const styles = {
        horizontal: "flex",
        vertical: "flex flex-col h-full",
        both: "flex flex-col h-full",
      }
      const childStyles = {
        horizontal: "mx-auto",
        vertical: "self-center",
        both: "self-center mx-auto",
      }
      return { parent: styles[direction], child: childStyles[direction] }
    },
  },
  {
    id: "grid-place-self",
    name: "Grid with Place-self",
    description: "Using CSS Grid's place-self property for individual item alignment.",
    pros: ["Concise syntax", "Works for individual items"],
    cons: ["Requires grid context", "Not supported in older browsers"],
    horizontalCode: `
.parent {
  display: grid;
}
.child {
  justify-self: center;
}`,
    verticalCode: `
.parent {
  display: grid;
}
.child {
  align-self: center;
}`,
    bothCode: `
.parent {
  display: grid;
}
.child {
  place-self: center;
}`,
    demoComponent: (direction: CenteringDirection) => {
      const styles = {
        horizontal: "grid",
        vertical: "grid h-full",
        both: "grid h-full",
      }
      const childStyles = {
        horizontal: "justify-self-center",
        vertical: "self-center",
        both: "place-self-center",
      }
      return { parent: styles[direction], child: childStyles[direction] }
    },
  },
  {
    id: "absolute-margin",
    name: "Absolute + Auto Margins",
    description: "Combining absolute positioning with auto margins.",
    pros: ["Works in most browsers", "No transforms needed"],
    cons: ["Requires fixed dimensions", "More complex setup"],
    horizontalCode: `
.parent {
  position: relative;
}
.child {
  position: absolute;
  width: 100px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}`,
    verticalCode: `
.parent {
  position: relative;
}
.child {
  position: absolute;
  height: 100px;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
}`,
    bothCode: `
.parent {
  position: relative;
}
.child {
  position: absolute;
  width: 100px;
  height: 100px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}`,
    demoComponent: (direction: CenteringDirection) => {
      const styles = {
        horizontal: "relative",
        vertical: "relative h-full",
        both: "relative h-full",
      }
      const childStyles = {
        horizontal: "absolute w-24 left-0 right-0 mx-auto",
        vertical: "absolute h-24 top-0 bottom-0 my-auto",
        both: "absolute w-24 h-24 top-0 right-0 bottom-0 left-0 m-auto",
      }
      return { parent: styles[direction], child: childStyles[direction] }
    },
  },
  {
    id: "line-height",
    name: "Line Height",
    description: "Using line-height for vertical centering of single-line text.",
    pros: ["Simple for text centering", "Good browser support"],
    cons: ["Only works for single-line text", "Limited to vertical centering"],
    horizontalCode: `
.parent {
  text-align: center;
}`,
    verticalCode: `
.parent {
  height: 100px;
  line-height: 100px; /* Same as height */
}`,
    bothCode: `
.parent {
  height: 100px;
  line-height: 100px; /* Same as height */
  text-align: center;
}`,
    demoComponent: (direction: CenteringDirection) => {
      const styles = {
        horizontal: "text-center",
        vertical: "h-24 leading-[6rem]",
        both: "h-24 leading-[6rem] text-center",
      }
      return styles[direction]
    },
  }
]