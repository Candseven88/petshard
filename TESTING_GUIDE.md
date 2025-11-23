# Testing Guide for New Features

## 🧪 Pre-Deployment Testing Checklist

### Environment Setup

- [ ] Verify `.env.local` exists with required variables:
  ```env
  BIGMODEL_API_KEY=your_api_key_here
  BIGMODEL_API_BASE_URL=https://open.bigmodel.cn/api/paas/v4
  NEXT_PUBLIC_APP_URL=http://localhost:3000
  ```

- [ ] Run `npm install` to ensure all dependencies are installed
- [ ] Start development server: `npm run dev`
- [ ] Verify server starts on `http://localhost:3000`

---

## 📋 Feature Testing

### 1. Header Navigation

**Test on Desktop**:
- [ ] Navigate to homepage
- [ ] Verify "Health Center" appears first in navigation
- [ ] Verify "Care Guide" appears second
- [ ] Click each navigation link and verify it works
- [ ] Test "More" dropdown menu
- [ ] Verify all dropdown items are clickable
- [ ] Check active state highlighting on each page

**Test on Mobile**:
- [ ] Resize browser to mobile width (< 640px)
- [ ] Verify navigation shows icons instead of text
- [ ] Verify dropdown menu works on mobile
- [ ] Test all navigation links on mobile

---

### 2. Pet Health Center (`/health-center`)

**Page Load**:
- [ ] Navigate to `/health-center`
- [ ] Verify page loads without errors
- [ ] Check hero section displays correctly
- [ ] Verify tab navigation exists (Symptom Checker / Breed Health Guide)

**Symptom Checker Tab**:
- [ ] Click "Symptom Checker" tab
- [ ] Verify disclaimer is visible and prominent
- [ ] Test pet type dropdown (Dog, Cat, Other)
- [ ] Enter breed name (e.g., "Golden Retriever")
- [ ] Enter age (e.g., "3")
- [ ] Select multiple symptoms from different categories
- [ ] Add additional information in textarea
- [ ] Click "Check Symptoms" button
- [ ] Verify loading animation appears
- [ ] Wait for AI response
- [ ] Verify response includes:
  - [ ] Severity Assessment section
  - [ ] Possible Causes section
  - [ ] Recommended Actions section
  - [ ] Home Care Tips section
  - [ ] When to Seek Veterinary Care section
- [ ] Test "Recheck" button
- [ ] Test "Copy" button functionality
- [ ] Verify sections are collapsible/expandable

**Breed Health Guide Tab**:
- [ ] Click "Breed Health Guide" tab
- [ ] Enter a breed name (e.g., "Labrador Retriever")
- [ ] Click "Generate" button
- [ ] Verify loading animation
- [ ] Wait for AI response
- [ ] Verify response includes health guide sections
- [ ] Test "Regenerate" button
- [ ] Test "Copy" button
- [ ] Try pressing Enter in input field to submit

**Error Handling**:
- [ ] Try submitting without selecting symptoms (Symptom Checker)
- [ ] Try submitting without breed name (Breed Health)
- [ ] Verify appropriate error messages appear

---

### 3. Pet Care Guide (`/pet-care-guide`)

**Page Load**:
- [ ] Navigate to `/pet-care-guide`
- [ ] Verify page loads without errors
- [ ] Check hero section displays correctly
- [ ] Verify 6 care topic cards are visible:
  - [ ] Feeding Guide 🍖
  - [ ] Training Tips 🎾
  - [ ] Environment Setup 🏠
  - [ ] Grooming Care ✂️
  - [ ] Puppy/Kitten Care 👶
  - [ ] Senior Pet Care 👴

**Topic Selection**:
- [ ] Click on "Feeding Guide"
- [ ] Verify card highlights/changes color
- [ ] Verify pet information form appears below

**Form Filling**:
- [ ] Select pet type (Dog)
- [ ] Enter breed (e.g., "Beagle")
- [ ] Enter age (e.g., "2")
- [ ] Enter weight (e.g., "25 lbs")
- [ ] Add special conditions (e.g., "prone to allergies")
- [ ] Click "Generate Care Guide"
- [ ] Verify loading animation
- [ ] Wait for AI response
- [ ] Verify response contains relevant care advice

**Test All Topics**:
- [ ] Test Feeding Guide
- [ ] Test Training Tips
- [ ] Test Environment Setup
- [ ] Test Grooming Care
- [ ] Test Puppy/Kitten Care
- [ ] Test Senior Pet Care

**Functionality**:
- [ ] Test switching between topics
- [ ] Test "Regenerate Guide" button
- [ ] Test "Copy" button
- [ ] Test form with minimal information (only pet type)
- [ ] Test form with all fields filled

---

### 4. Homepage Updates (`/`)

**Feature Cards**:
- [ ] Navigate to homepage
- [ ] Scroll to "Core Features" section
- [ ] Verify "Health Center" card appears first
- [ ] Verify "Care Guide" card appears second
- [ ] Check both cards show "NEW" badge
- [ ] Verify badges have animation (pulse effect)
- [ ] Verify cards have pink highlight border
- [ ] Click each feature card and verify navigation

**Minor Features**:
- [ ] Check minor features section updated
- [ ] Verify "Virtual Breeding" and "Video Generator" moved here
- [ ] Test all minor feature links

---

### 5. Redirect Testing

**Old URL Redirect**:
- [ ] Navigate directly to `/health-guide`
- [ ] Verify automatic redirect to `/health-center`
- [ ] Check redirect happens smoothly (no flash of old content)

---

## 🔍 API Testing

### Health Center API

**Test Breed Health**:
```bash
curl -X POST http://localhost:3000/api/health-center \
  -H "Content-Type: application/json" \
  -d '{
    "type": "breed-health",
    "breed": "Golden Retriever"
  }'
```
- [ ] Verify response is JSON
- [ ] Check response has `guide` field
- [ ] Verify content is in English
- [ ] Check for appropriate health sections

**Test Symptom Check**:
```bash
curl -X POST http://localhost:3000/api/health-center \
  -H "Content-Type: application/json" \
  -d '{
    "type": "symptom-check",
    "petType": "dog",
    "breed": "Beagle",
    "age": "3",
    "symptoms": ["Vomiting", "Lethargy"],
    "additionalInfo": "Started yesterday evening"
  }'
```
- [ ] Verify response includes severity assessment
- [ ] Check disclaimer is present in response

### Pet Care Guide API

**Test Care Guide**:
```bash
curl -X POST http://localhost:3000/api/pet-care-guide \
  -H "Content-Type: application/json" \
  -d '{
    "topic": "feeding",
    "petType": "dog",
    "breed": "Labrador",
    "age": "2",
    "weight": "60 lbs"
  }'
```
- [ ] Verify response is JSON
- [ ] Check response has `guide` field
- [ ] Verify content is relevant to topic

**Test All Topics**:
- [ ] Test `feeding`
- [ ] Test `training`
- [ ] Test `environment`
- [ ] Test `grooming`
- [ ] Test `puppy-kitten`
- [ ] Test `senior`

---

## 📱 Responsive Design Testing

### Breakpoints to Test

- [ ] Mobile (< 640px) - Use iPhone SE viewport
- [ ] Tablet (768px - 1024px) - Use iPad viewport
- [ ] Desktop (> 1024px) - Use standard desktop

**For Each Breakpoint**:
- [ ] Test header navigation
- [ ] Test hero sections
- [ ] Test form layouts
- [ ] Test card grids
- [ ] Test button sizes and spacing
- [ ] Verify text is readable
- [ ] Check image sizing

---

## 🚀 Browser Compatibility

Test in the following browsers:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## ⚡ Performance Testing

- [ ] Check page load time (should be < 3 seconds)
- [ ] Verify images load properly
- [ ] Check for console errors
- [ ] Test API response time (should be < 5 seconds)
- [ ] Monitor API usage during testing
- [ ] Check for memory leaks (long session testing)

---

## 🔒 Security & Safety Testing

- [ ] Verify API keys are not exposed in client-side code
- [ ] Check disclaimer is always visible for health advice
- [ ] Test input sanitization (try special characters)
- [ ] Verify error messages don't expose sensitive info
- [ ] Test CORS if calling from different domain

---

## 📊 SEO Testing

- [ ] Check `/sitemap.xml` includes new URLs
- [ ] Verify meta tags on new pages
- [ ] Test Open Graph images
- [ ] Check page titles are descriptive
- [ ] Verify canonical URLs are correct

**Tools to Use**:
- Google Search Console
- Lighthouse audit
- SEO checker tools

---

## ✅ Final Checklist Before Deployment

- [ ] All tests above passed
- [ ] No console errors in any browser
- [ ] All linter checks passed (`npm run lint`)
- [ ] README.md is updated
- [ ] FEATURE_UPDATE_2024.md created
- [ ] Environment variables documented
- [ ] Code is committed to git
- [ ] Version number updated in package.json
- [ ] Changelog created

---

## 🐛 Known Issues to Watch For

### Common Issues

1. **API Rate Limiting**
   - Solution: Implement request throttling
   - Monitor: API usage metrics

2. **Long Response Times**
   - Solution: Add timeout handling
   - Monitor: Average response time

3. **Empty API Responses**
   - Solution: Better error handling
   - Monitor: Error rate in logs

4. **Mobile Layout Issues**
   - Solution: Test on real devices
   - Monitor: Mobile bounce rate

---

## 📞 Debugging Tips

### If API calls fail:
1. Check console for error messages
2. Verify API key is set correctly
3. Check network tab for request/response
4. Test API endpoint directly with curl
5. Check API provider status

### If pages don't load:
1. Check for JavaScript errors
2. Verify all imports are correct
3. Check for missing dependencies
4. Clear browser cache
5. Restart development server

### If styling looks wrong:
1. Check Tailwind classes are correct
2. Verify CSS is being generated
3. Check for conflicting styles
4. Test in different browsers
5. Check viewport meta tag

---

## 📝 Testing Report Template

After testing, fill out this report:

```
Testing Date: ___________
Tester Name: ___________
Environment: [ ] Development [ ] Staging [ ] Production

Features Tested:
- [ ] Pet Health Center - Symptom Checker
- [ ] Pet Health Center - Breed Health Guide
- [ ] Pet Care Guide
- [ ] Header Navigation
- [ ] Homepage Updates
- [ ] Redirects

Issues Found: ___ (High: ___ Medium: ___ Low: ___)

Critical Issues:
1. ___________
2. ___________

Recommendations:
1. ___________
2. ___________

Status: [ ] Ready to Deploy [ ] Needs Fixes [ ] Major Issues
```

---

**Last Updated**: November 22, 2024  
**Next Review**: Before each deployment

