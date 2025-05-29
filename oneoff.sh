#!/bin/bash

# Check what's in the types file currently
echo "Current types.ts content:"
cat src/data/types.ts

echo ""
echo "Recreating types.ts with proper exports..."

# Recreate the types file with proper exports
cat > src/data/types.ts << 'EOF'
export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  sessions: string;
  currency: string;
  format: string;
  curriculum: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  service: string;
}
EOF

echo "✅ Fixed types.ts exports"
echo "🔷 All interfaces are now properly exported"