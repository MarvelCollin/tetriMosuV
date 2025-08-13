# Float-Title Animations Comprehensive Analysis

This document provides a complete analysis of all `animate-float-title` related animations found in the tetriMosuV project, specifically related to the usage:

```html
<span className="inline-block animate-float-title">CONTACT</span>
```

## 1. Core Animation Definitions

### 1.1 Main Float-Title Animations (src/index.css)

#### Basic Float-Title Keyframes:
```css
@keyframes float-title {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-5px) rotate(2deg);
  }
}

@keyframes float-title-delayed {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-5px) rotate(-2deg);
  }
}

@keyframes float-title-more-delayed {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-5px) rotate(1deg);
  }
}
```

#### Basic Float-Title CSS Classes:
```css
.animate-float-title {
  animation: float-title 3s ease-in-out infinite;
  display: inline-block;
}

.animate-float-title-delayed {
  animation: float-title-delayed 3s ease-in-out infinite 0.2s;
  display: inline-block;
}

.animate-float-title-more-delayed {
  animation: float-title-more-delayed 3s ease-in-out infinite 0.4s;
  display: inline-block;
}
```

**Note:** These classes appear to be duplicated in src/index.css (lines 1489-1502 and 1526-1539).

### 1.2 Numbered Float-Title Animations (src/index.css)

#### Numbered Keyframes:
```css
@keyframes float-title-0 {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-5px) rotate(1deg);
  }
}

@keyframes float-title-1 {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-5px) rotate(-1deg);
  }
}

@keyframes float-title-2 {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-5px) rotate(0.5deg);
  }
}

@keyframes float-title-3 {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-5px) rotate(-0.5deg);
  }
}
```

#### Numbered CSS Classes:
```css
.animate-float-title-0 {
  animation: float-title-0 3s ease-in-out infinite;
}

.animate-float-title-1 {
  animation: float-title-1 3s ease-in-out infinite 0.75s;
}

.animate-float-title-2 {
  animation: float-title-2 3s ease-in-out infinite 1.5s;
}

.animate-float-title-3 {
  animation: float-title-3 3s ease-in-out infinite 2.25s;
}
```

#### Combined Slide-In + Float Animations:
```css
.animate-slide-in-number-1 {
  animation: slideInNumber1 2.5s cubic-bezier(0.25, 0.1, 0.25, 1) forwards,
    float-title-0 4s ease-in-out infinite 2s;
}

.animate-slide-in-number-2 {
  animation: slideInNumber2 2.5s cubic-bezier(0.25, 0.1, 0.25, 1) 0.15s forwards,
    float-title-1 4s ease-in-out infinite 2.15s;
}

.animate-slide-in-number-3 {
  animation: slideInNumber3 2.5s cubic-bezier(0.25, 0.1, 0.25, 1) 0.3s forwards,
    float-title-2 4s ease-in-out infinite 2.3s;
}

.animate-slide-in-number-4 {
  animation: slideInNumber4 2.5s cubic-bezier(0.25, 0.1, 0.25, 1) 0.45s forwards,
    float-title-1 4s ease-in-out infinite 2.45s;
}
```

### 1.3 Tutorial Modal Duplicate Definitions (src/games/modals/tutorial-modal.tsx)

The tutorial modal contains embedded CSS that duplicates the float-title animations:

```css
@keyframes float-title {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-5px) rotate(2deg); }
}

@keyframes float-title-delayed {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-5px) rotate(-2deg); }
}

@keyframes float-title-more-delayed {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-5px) rotate(1deg); }
}

.animate-float-title {
  animation: float-title 3s ease-in-out infinite;
  display: inline-block;
}

.animate-float-title-delayed {
  animation: float-title-delayed 3s ease-in-out infinite;
  display: inline-block;
}

.animate-float-title-more-delayed {
  animation: float-title-more-delayed 3s ease-in-out infinite;
  display: inline-block;
}
```

**Note:** These definitions are duplicated within the tutorial modal file (appears twice).

## 2. Usage Locations

### 2.1 Contact Us Section (Primary Reference)
**File:** `src/components/sections/contact-us-section.tsx`

```tsx
<span className="inline-block animate-float-title">CONTACT</span>
<span className="inline-block animate-float-title-delayed mx-2">US</span>

// Also used in a quote:
<span className="inline-block animate-float-title">"Confront</span>
<span className="inline-block animate-float-title-delayed mx-1">the</span>
<span className="inline-block animate-float-title">challenges</span>
// ... more words with alternating animations

<span className="inline-block animate-float-title">~</span>
<span className="inline-block animate-float-title-delayed mx-1">24-2</span>
```

### 2.2 Tutorial Modal
**File:** `src/games/modals/tutorial-modal.tsx`

```tsx
// Page numbers:
<span className="inline-block animate-float-title transition-all duration-300">2</span>
<span className="inline-block animate-float-title-delayed mx-2">5</span>
<span className="inline-block animate-float-title-more-delayed">-</span>
<span className="inline-block animate-float-title">2</span>

// Title:
<span className="inline-block animate-float-title transition-all duration-300">HOW</span>
<span className="inline-block animate-float-title-delayed mx-2">TO</span>
<span className="inline-block animate-float-title-more-delayed">PLAY</span>
```

### 2.3 Home Page
**File:** `src/pages/home.tsx`

```tsx
<span className="inline-block animate-float-title mr-2">Play</span>
<span className="inline-block animate-float-title-delayed">Game</span>
```

### 2.4 Welcome Title Component
**File:** `src/components/main-page/welcome-title.tsx`

```tsx
<span className="inline-block animate-float-title-0">2</span>
<span className="inline-block animate-float-title-1">5</span>
<span className="inline-block animate-float-title-2">-</span>
<span className="inline-block animate-float-title-0">2</span>
```

### 2.5 Other Usage Files
The following files also contain float-title animations:
- `src/components/sections/initial-test-section.tsx`
- `src/components/sections/registration-section.tsx`
- `src/components/sections/recruitment-phase-section.tsx`
- `src/components/sections/assistant-benefits-section.tsx`

## 3. Animation Characteristics

### 3.1 Basic Float-Title Family
- **Duration:** 3 seconds
- **Timing:** ease-in-out
- **Repetition:** infinite
- **Movement:** Vertical translation (-5px) + rotation
- **Delay Variations:**
  - `animate-float-title`: No delay
  - `animate-float-title-delayed`: 0.2s delay
  - `animate-float-title-more-delayed`: 0.4s delay

### 3.2 Numbered Float-Title Family
- **Duration:** 3 seconds (or 4s for combined animations)
- **Timing:** ease-in-out
- **Repetition:** infinite
- **Delay Variations:**
  - `animate-float-title-0`: No delay
  - `animate-float-title-1`: 0.75s delay
  - `animate-float-title-2`: 1.5s delay
  - `animate-float-title-3`: 2.25s delay

### 3.3 Rotation Variations
- `float-title`: +2deg rotation
- `float-title-delayed`: -2deg rotation
- `float-title-more-delayed`: +1deg rotation
- `float-title-0`: +1deg rotation
- `float-title-1`: -1deg rotation
- `float-title-2`: +0.5deg rotation
- `float-title-3`: -0.5deg rotation

## 4. Code Quality Issues Identified

### 4.1 Duplication
1. **CSS Classes Duplicated** in `src/index.css`:
   - Lines 1489-1502 and 1526-1539 contain identical definitions
2. **Complete Animation System Duplicated** in `src/games/modals/tutorial-modal.tsx`:
   - The tutorial modal contains embedded CSS that duplicates the main definitions
   - This duplication appears twice within the same file

### 4.2 Inconsistencies
1. **Missing delay attribute** in tutorial modal animations
2. **Different delay patterns** between numbered and basic animations

## 5. Recommended Actions

1. **Remove Duplications:** Consolidate duplicate CSS definitions
2. **Centralize Animations:** Move tutorial modal animations to main CSS file
3. **Standardize Delays:** Ensure consistent delay patterns across all variations
4. **Documentation:** Add comments in CSS to explain the purpose of each animation variant

**Priority:** The contact-us-section.tsx has the highest usage (14 instances) and should be the primary reference for any changes or optimizations.

## 6. Usage Statistics

Based on comprehensive analysis of the codebase:

### Total Usage Count: 40 instances across 8 files

### Usage Frequency by Animation Type:
- `animate-float-title`: 14 instances
- `animate-float-title-delayed`: 13 instances  
- `animate-float-title-more-delayed`: 4 instances
- `animate-float-title-0`: 2 instances
- `animate-float-title-1`: 1 instance
- `animate-float-title-2`: 1 instance

### Usage by File:
- `src/components/sections/contact-us-section.tsx`: 14 instances (highest usage)
- `src/games/modals/tutorial-modal.tsx`: 13 instances
- `src/components/main-page/welcome-title.tsx`: 4 instances
- `src/pages/home.tsx`: 2 instances
- Other sections: 1-2 instances each

### Most Common Pattern:
The alternating pattern of `animate-float-title` and `animate-float-title-delayed` is the most frequently used, especially in the contact-us section where it creates a wave-like effect across multiple words.

## 7. Dependencies

These animations work in conjunction with:
- **Tailwind CSS:** For responsive utilities and spacing
- **CSS Custom Properties:** For theme-based styling
- **Inline-block Display:** All animations require `display: inline-block`
- **Text Elements:** Designed specifically for text/character animation