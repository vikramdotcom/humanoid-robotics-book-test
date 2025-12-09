# Data Model: Docusaurus Robotics Book

## Content Structure

### Book Chapter
- **title**: String (required) - The title of the chapter
- **slug**: String (required) - URL-friendly identifier for the chapter
- **content**: Markdown (required) - The main content of the chapter
- **diagrams**: Array[Diagram] - Optional ASCII or simple diagrams
- **navigation**: Object - Previous/next chapter relationships

### Diagram
- **type**: Enum (ascii|svg) - The type of diagram
- **content**: String - The actual diagram content
- **caption**: String - Description of the diagram
- **position**: Enum (inline|figure) - Where the diagram appears in content

### Navigation
- **previous**: Chapter (optional) - Link to previous chapter
- **next**: Chapter (optional) - Link to next chapter
- **parent**: Chapter (optional) - Parent section if applicable
- **children**: Array[Chapter] - Subsections if applicable

## Relationships

- A Book contains 8 Chapters
- Each Chapter may contain multiple Diagrams
- Chapters are connected through Navigation relationships
- All Chapters are organized in a sequential structure

## Validation Rules

- Each Chapter must have a unique slug
- Each Chapter title must be descriptive and concise
- Content must follow markdown format
- Diagrams must be simple (ASCII or basic SVG)
- Navigation must create a coherent reading path through all 8 chapters

## State Transitions

This is a static documentation site, so there are no state transitions. Content is published and remains static until updated.