'use client';

import { Button } from '@/components/ui/button';
import { GraduationCap, Settings, BookOpen } from 'lucide-react';

export default function Sidebar({ activeSection, onSectionChange }) {
  const menuItems = [
    { id: 'programs', label: 'Programs', icon: GraduationCap },
    { id: 'classSettings', label: 'Class Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-card border-r border-border flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <BookOpen className="h-8 w-8 text-primary" />
          <h1 className="text-xl font-bold text-foreground">Admin Panel</h1>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                className="w-full justify-start gap-3"
                onClick={() => onSectionChange(item.id)}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
