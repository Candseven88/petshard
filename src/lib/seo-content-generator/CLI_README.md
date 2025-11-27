# SEO Content Generator CLI

A command-line interface for generating SEO-optimized blog articles from keyword lists.

## Installation

The CLI is built into the project. To use it, first build the CLI components:

```bash
npm run build:cli
```

## Usage

### Generate Articles from Keywords

#### Command Line Keywords
```bash
npm run seo:generate -- -k "dog grooming,cat care,pet nutrition" --write-files
```

#### From File
```bash
npm run seo:generate -- -f keywords/pet-care.txt --write-files -o ./generated-articles
```

#### With Blog Integration
```bash
npm run seo:generate -- -f keywords/pet-care.txt --write-files --integrate-blog
```

#### Interactive Mode
```bash
npm run seo:generate -- --interactive --write-files
```

#### Dry Run (Preview Only)
```bash
npm run seo:generate -- -k "dog training,cat health" --dry-run
```

### Batch Processing

Process multiple keyword files at once:

```bash
npm run seo:batch -- -d ./keywords -o ./generated-articles
```

### Validate Existing Articles

```bash
npm run seo:validate -- -k "dog grooming,cat care"
npm run seo:validate -- -f keywords/pet-care.txt
npm run seo:validate -- --all
```

### Configuration

View current configuration:

```bash
npm run seo:config -- --show
```

### Blog Integration Management

Check blog integration status:

```bash
npm run seo:blog -- --status
```

Create blog page backup:

```bash
npm run seo:blog -- --backup
```

Validate blog integration:

```bash
npm run seo:blog -- --validate
```

## Command Options

### Generate Command

- `-k, --keywords <keywords>`: Comma-separated list of keywords
- `-f, --file <file>`: Path to file containing keywords (one per line)
- `-o, --output <directory>`: Output directory for generated articles (default: ./generated-articles)
- `-c, --content-focus <focus>`: Content focus: breed, health, care, general (default: general)
- `-w, --write-files`: Write generated articles to files
- `--integrate-blog`: Integrate articles into existing blog system
- `--dry-run`: Generate content without writing files
- `--interactive`: Interactive mode for keyword input

### Batch Command

- `-d, --directory <directory>`: Directory containing keyword files (default: ./keywords)
- `-o, --output <directory>`: Output directory for generated articles (default: ./generated-articles)
- `-c, --content-focus <focus>`: Content focus: breed, health, care, general (default: general)
- `--pattern <pattern>`: File pattern to match (default: *.txt)
- `--integrate-blog`: Integrate articles into existing blog system
- `--dry-run`: Generate content without writing files

### Validate Command

- `-k, --keywords <keywords>`: Comma-separated list of keywords to validate
- `-f, --file <file>`: Path to file containing keywords to validate
- `-a, --all`: Validate all existing articles

### Config Command

- `--show`: Show current configuration
- `--reset`: Reset to default configuration

### Blog Command

- `--status`: Show blog integration status
- `--backup`: Create backup of current blog page
- `--validate`: Validate blog integration

## Keyword File Format

Keyword files should contain one keyword per line. Lines starting with `#` are treated as comments and ignored.

Example `keywords/pet-care.txt`:
```
# Pet Care Keywords
dog grooming tips
cat litter training
pet nutrition guide
puppy training basics
```

## Output Structure

Generated articles are organized in the following structure:

```
generated-articles/
├── generation-summary.json
├── dog-grooming-tips/
│   ├── page.tsx
│   ├── types.ts
│   ├── data.ts
│   └── components/
└── cat-litter-training/
    ├── page.tsx
    ├── types.ts
    ├── data.ts
    └── components/
```

## Examples

### Basic Usage
```bash
# Generate a single article
npm run seo:generate -- -k "dog training basics" --write-files

# Generate multiple articles
npm run seo:generate -- -k "dog training,cat care,pet nutrition" --write-files

# Process a keyword file
npm run seo:generate -- -f keywords/pet-care.txt --write-files
```

### Advanced Usage
```bash
# Batch process with blog integration
npm run seo:batch -- -d ./keywords -c health --integrate-blog

# Interactive generation with blog integration
npm run seo:generate -- --interactive --write-files --integrate-blog

# Validate existing content
npm run seo:validate -- -f keywords/pet-care.txt

# Check blog integration status
npm run seo:blog -- --status

# Create backup before major changes
npm run seo:blog -- --backup
```

### Content Focus Options

- `breed`: Focus on breed-specific content
- `health`: Focus on health and medical content
- `care`: Focus on care and maintenance content
- `general`: General pet-related content (default)

## Error Handling

The CLI provides detailed error messages and validation feedback:

- Invalid keywords are filtered out with warnings
- Generation errors are logged with specific failure reasons
- Validation results show detailed compliance information
- Batch processing continues even if individual articles fail

## Integration with Next.js Blog

The generated articles are compatible with the existing Next.js blog structure and can be directly integrated into the blog system.

### Automatic Blog Integration

When using the `--integrate-blog` flag, the CLI will:

1. **Create article files** in the correct blog directory structure
2. **Update the main blog page** to include new articles in the listing
3. **Create backups** of existing files before making changes
4. **Validate integration** to ensure everything works correctly

### Blog Integration Features

- **Automatic blog page updates**: New articles are added to the main blog listing
- **Smart image selection**: Appropriate images are selected based on article content
- **Tag generation**: Relevant tags are automatically generated for each article
- **Backup creation**: Automatic backups before making changes
- **Validation**: Post-integration validation to ensure everything works

### Integration Workflow

1. Generate articles using the CLI
2. Articles are written to `src/app/blog/[slug]/` directories
3. Main blog page (`src/app/blog/page.tsx`) is updated with new entries
4. Integration is validated to ensure proper structure
5. Summary reports are generated for review

### Safety Features

- **Automatic backups**: Blog page is backed up before changes
- **Validation**: Integration is validated after completion
- **Error handling**: Detailed error reporting for troubleshooting
- **Dry run support**: Preview changes without writing files