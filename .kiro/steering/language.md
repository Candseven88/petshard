# Language Guidelines

## Communication Language

- **AI Assistant Communication**: Always use Chinese (中文) when communicating with the user
- **Explanations and Discussions**: All explanations, suggestions, and discussions should be in Chinese

## Code and Application Language

- **Web Application Content**: English ONLY - no Chinese characters allowed in the application
- **User-Facing Text**: All UI text, labels, buttons, messages must be in English
- **Code Comments**: English preferred for better international collaboration
- **Variable Names**: English only
- **Function Names**: English only
- **API Responses**: English only
- **Error Messages**: English only
- **Documentation in Code**: English only

## Examples

### ✅ Correct
```typescript
// Component with English UI text
<button className="...">Submit</button>
<p>Please upload your pet's photo</p>

// English variable names
const petName = "Buddy";
const healthStatus = "healthy";
```

### ❌ Incorrect
```typescript
// NO Chinese in application code
<button className="...">提交</button>
<p>请上传您的宠物照片</p>

// NO Chinese variable names
const 宠物名字 = "Buddy";
const 健康状态 = "healthy";
```

## Exception

- Internal documentation files (README.md, CHANGELOG.md, etc.) may contain Chinese for team communication
- Steering rules and internal guides can be in Chinese or English
