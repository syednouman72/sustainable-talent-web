# Greenhouse Integration - Careers Page

## Overview
The Careers page now uses the Greenhouse API with a DOM-based script approach to fetch and display live job listings.

## How It Works

### 1. **External Script**
```html
<script src="https://tools.refokus.com/cms-filter/bundle.v1.5.0.js"></script>
```
This loads the Refokus CMS filter library for enhanced filtering capabilities.

### 2. **Configuration**
```javascript
const ghSlug = "sustainabletalent";
```
This is your Greenhouse company slug. Update this if your company slug changes.

### 3. **Data Attributes**
The script uses `data-gh` attributes to identify key elements:

- `data-gh="root"` - Container where department sections will be appended
- `data-gh="loading"` - Loading state shown while fetching
- `data-gh="filter"` - Department filter dropdown
- `data-gh="placeholder"` - Empty state if no jobs found
- `data-gh="section-wrapper"` - Template for department sections (cloned)
- `data-gh="section-heading"` - Department name heading
- `data-gh="container"` - Container for job listings within a department
- `data-gh="listing"` - Template for individual job cards (cloned)
- `data-gh="job-title"` - Job title
- `data-gh="job-location"` - Job location
- `data-gh="job-link"` - Apply button link to Greenhouse

### 4. **Data Flow**

1. **On Page Load**: Shows loading state
2. **Fetch Departments**: Gets all departments from Greenhouse API
3. **Create Sections**: Clones section template for each department with jobs
4. **Fetch Jobs**: Gets jobs for each department
5. **Create Listings**: Clones listing template for each job
6. **Hide Loading**: Removes loading state and shows job listings

### 5. **Filtering**
The department filter dropdown is automatically populated with departments that have open positions. Selecting a department shows/hides relevant sections.

## API Endpoints Used

1. **Departments List**:
   ```
   https://boards-api.greenhouse.io/v1/boards/{ghSlug}/departments/
   ```

2. **Department Jobs**:
   ```
   https://boards-api.greenhouse.io/v1/boards/{ghSlug}/departments/{departmentId}
   ```

## Customization

### Changing Company Slug
Update the `ghSlug` variable in the script:
```javascript
const ghSlug = "your-company-slug";
```

### Styling Jobs
The job cards use the existing `.job` CSS class. Modify the styles in the `<style>` section to customize appearance.

### Adding More Filters
The Refokus CMS filter bundle supports additional filtering. You can add more filter dropdowns with similar patterns.

## Testing

1. Visit `/careers` page
2. You should see a loading state briefly
3. Jobs should appear grouped by department
4. Filter dropdown should show all departments
5. Clicking "Apply" should open the Greenhouse job page in a new tab

## Troubleshooting

### No Jobs Appearing
- Check browser console for API errors
- Verify the `ghSlug` matches your Greenhouse company name
- Ensure Greenhouse board is public
- Check network tab to see if API calls are successful

### Jobs Not Grouped Correctly
- Verify jobs in Greenhouse are assigned to departments
- Check that department data is being returned from API

### Styling Issues
- Ensure the global CSS variables are loaded
- Check that `.job`, `.badge`, and `.btn` classes are defined
- Verify the pearl-gray theme variables are present

## Future Enhancements

- Add more filter options (location, job type)
- Implement search functionality
- Add job detail modals (currently links directly to Greenhouse)
- Cache API responses for better performance
- Add loading skeletons for better UX
