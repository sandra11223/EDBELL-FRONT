import mongoose from 'mongoose';

export interface IGallery {
  _id?: string;
  title: string;
  description: string;
  category: 'events' | 'campus' | 'graduation' | 'activities' | 'achievements';
  imageUrl: string;
  imageAlt: string;
  location?: string;
  eventDate?: Date;
  uploadedBy: string;
  tags: string[];
  featured: boolean;
  published: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const GallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Image title is required'],
    trim: true,
    minlength: [3, 'Title must be at least 3 characters long'],
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Image description is required'],
    trim: true,
    minlength: [10, 'Description must be at least 10 characters long'],
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: {
      values: ['events', 'campus', 'graduation', 'activities', 'achievements'],
      message: 'Please select a valid category'
    }
  },
  imageUrl: {
    type: String,
    required: [true, 'Image URL is required'],
    trim: true
  },
  imageAlt: {
    type: String,
    required: [true, 'Image alt text is required'],
    trim: true,
    maxlength: [200, 'Alt text cannot exceed 200 characters']
  },
  location: {
    type: String,
    trim: true,
    maxlength: [100, 'Location cannot exceed 100 characters']
  },
  eventDate: {
    type: Date,
    default: Date.now
  },
  uploadedBy: {
    type: String,
    required: [true, 'Uploader information is required'],
    trim: true,
    default: 'Admin'
  },
  tags: [{
    type: String,
    trim: true,
    lowercase: true
  }],
  featured: {
    type: Boolean,
    default: false
  },
  published: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for better query performance
GallerySchema.index({ category: 1, published: 1 });
GallerySchema.index({ featured: 1, published: 1 });
GallerySchema.index({ eventDate: -1 });
GallerySchema.index({ createdAt: -1 });

export default mongoose.models.Gallery || mongoose.model('Gallery', GallerySchema);