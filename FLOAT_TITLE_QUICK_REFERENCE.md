# Quick Reference: Float-Title Animations

## Animation Classes Summary

### Basic Float-Title Animations
| Class Name | Keyframe | Rotation | Delay | Duration |
|------------|----------|----------|-------|----------|
| `animate-float-title` | `float-title` | +2deg | 0s | 3s |
| `animate-float-title-delayed` | `float-title-delayed` | -2deg | 0.2s | 3s |
| `animate-float-title-more-delayed` | `float-title-more-delayed` | +1deg | 0.4s | 3s |

### Numbered Float-Title Animations  
| Class Name | Keyframe | Rotation | Delay | Duration |
|------------|----------|----------|-------|----------|
| `animate-float-title-0` | `float-title-0` | +1deg | 0s | 3s |
| `animate-float-title-1` | `float-title-1` | -1deg | 0.75s | 3s |
| `animate-float-title-2` | `float-title-2` | +0.5deg | 1.5s | 3s |
| `animate-float-title-3` | `float-title-3` | -0.5deg | 2.25s | 3s |

## Usage Examples

### Contact Us Section Pattern
```tsx
<span className="inline-block animate-float-title">CONTACT</span>
<span className="inline-block animate-float-title-delayed mx-2">US</span>
```

### Tutorial Modal Pattern  
```tsx
<span className="inline-block animate-float-title-more-delayed">HOW</span>
<span className="inline-block animate-float-title-delayed mx-2">TO</span>
<span className="inline-block animate-float-title">PLAY</span>
```

### Welcome Title Pattern (Numbers)
```tsx
<span className="inline-block animate-float-title-0">2</span>
<span className="inline-block animate-float-title-1">5</span>
<span className="inline-block animate-float-title-2">-</span>
<span className="inline-block animate-float-title-0">2</span>
```

## File Locations

### Animation Definitions
- **Primary:** `src/index.css` (lines 1459-1502, 1526-1539)
- **Numbered:** `src/index.css` (lines 56-94, 462-476)
- **Duplicated:** `src/games/modals/tutorial-modal.tsx` (embedded CSS)

### Usage Locations
- `src/components/sections/contact-us-section.tsx` ⭐ (Primary reference)
- `src/games/modals/tutorial-modal.tsx`
- `src/pages/home.tsx`
- `src/components/main-page/welcome-title.tsx`
- `src/components/sections/initial-test-section.tsx`
- `src/components/sections/registration-section.tsx`
- `src/components/sections/recruitment-phase-section.tsx`
- `src/components/sections/assistant-benefits-section.tsx`

## Animation Behavior

All float-title animations:
- **Move vertically:** translateY(0) ↔ translateY(-5px)
- **Rotate slightly:** Various degrees as specified in table
- **Infinite loop:** Continuous animation
- **Smooth transition:** ease-in-out timing function
- **Requires:** `display: inline-block` for proper animation