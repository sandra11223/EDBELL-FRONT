import mongoose from 'mongoose';

export interface IBlog {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  readTime: string;
  featured: boolean;
  published: boolean;
  publishDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Blog title is required'],
    trim: true,
    minlength: [5, 'Title must be at least 5 characters long'],
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  slug: {
    type: String,
    required: [true, 'Blog slug is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens']
  },
  excerpt: {
    type: String,
    required: [true, 'Blog excerpt is required'],
    trim: true,
    minlength: [20, 'Excerpt must be at least 20 characters long'],
    maxlength: [500, 'Excerpt cannot exceed 500 characters']
  },
  content: {
    type: String,
    required: [true, 'Blog content is required'],
    minlength: [100, 'Content must be at least 100 characters long']
  },
  author: {
    type: String,
    required: [true, 'Author name is required'],
    trim: true,
    minlength: [2, 'Author name must be at least 2 characters long'],
    maxlength: [100, 'Author name cannot exceed 100 characters']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    trim: true,
    enum: {
      values: [
        'Education Trends',
        'Career Guidance', 
        'Study Abroad',
        'Scholarships',
        'Skills Development',
        'University Rankings',
        'Regulations',
        'Study Tips',
        'Industry Insights',
        'Technology',
        'News'
      ],
      message: 'Please select a valid category'
    }
  },
  tags: [{
    type: String,
    trim: true,
    lowercase: true
  }],
  readTime: {
    type: String,
    required: [true, 'Read time is required'],
    match: [/^\d+\s*(min|mins|minute|minutes)\s*read$/i, 'Read time format should be like "5 min read"']
  },
  featured: {
    type: Boolean,
    default: false
  },
  published: {
    type: Boolean,
    default: false
  },
  publishDate: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Pre-save middleware to generate slug from title if not provided
BlogSchema.pre('save', async function() {
  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
  
  // Auto-format read time if needed
  if (this.readTime) {
    const readTime = this.readTime.toLowerCase().trim();
    
    // If it's just a number, add "min read"
    if (/^\d+$/.test(readTime)) {
      this.readTime = `${readTime} min read`;
    }
    // If it's number + space + min/mins/minute/minutes but missing "read"
    else if (/^\d+\s+(min|mins|minute|minutes)$/i.test(readTime)) {
      this.readTime = `${readTime} read`;
    }
    // If it's number without space + min/mins/minute/minutes but missing "read"
    else if (/^\d+(min|mins|minute|minutes)$/i.test(readTime)) {
      const match = readTime.match(/^(\d+)(min|mins|minute|minutes)$/i);
      if (match) {
        this.readTime = `${match[1]} ${match[2]} read`;
      }
    }
    // If it has "read" but wrong spacing, normalize it
    else if (/^\d+\s*(min|mins|minute|minutes)\s*read$/i.test(readTime)) {
      const match = readTime.match(/^(\d+)\s*(min|mins|minute|minutes)\s*read$/i);
      if (match) {
        this.readTime = `${match[1]} ${match[2]} read`;
      }
    }
    // If it's just "X minutes" or "X mins" without "read", add it
    else if (/^\d+\s*(min|mins|minute|minutes)$/i.test(readTime)) {
      this.readTime = `${readTime} read`;
    }
  }
});

// Index for better query performance
BlogSchema.index({ published: 1, publishDate: -1 });
BlogSchema.index({ category: 1, published: 1 });
BlogSchema.index({ featured: 1, published: 1 });
BlogSchema.index({ slug: 1 });

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);