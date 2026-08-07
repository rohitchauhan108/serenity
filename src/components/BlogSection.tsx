'use client';

import React, { useState } from 'react';
import {
  BookOpen,
  Clock,
  User,
  ArrowRight,
  Sparkles,
  X,
  Share2,
  CheckCircle2,
  Tag
} from 'lucide-react';
import { BLOG_POSTS } from '../data/clinicData';
import { BlogPost } from '../types';

export const BlogSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/80 border border-teal-200 text-teal-900 text-xs font-bold uppercase">
            <BookOpen className="w-3.5 h-3.5 text-teal-700" />
            <span>Mental Health Knowledge & Resources</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Latest Psychiatric Insights & Wellness Guides
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Empowering articles written by our clinical team to demystify mental health, medication management, and daily emotional balance.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="glass-card rounded-3xl overflow-hidden border border-slate-200/80 hover:border-teal-300 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-teal-900/80 backdrop-blur-md text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-teal-600" />
                      {post.readTime}
                    </span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-teal-800 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100/80">
                <span className="text-[11px] font-bold text-slate-700">
                  By {post.author}
                </span>

                <button
                  onClick={() => setActiveArticle(post)}
                  className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1 group-hover:underline"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl border border-slate-100 relative">
            
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
                {activeArticle.category}
              </span>

              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
                {activeArticle.title}
              </h2>

              <div className="flex items-center gap-4 text-xs text-slate-500 pb-4 border-b border-slate-100">
                <span className="font-semibold text-slate-800">{activeArticle.author}</span>
                <span>•</span>
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>

              <div className="rounded-2xl overflow-hidden h-64 bg-slate-100 my-4">
                <img
                  src={activeArticle.imageUrl}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
                {activeArticle.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Key Takeaways Box */}
              <div className="bg-teal-50 p-5 rounded-2xl border border-teal-200/80 my-6">
                <h4 className="font-bold text-sm text-teal-900 mb-2">Key Clinical Takeaways:</h4>
                <div className="space-y-2">
                  {activeArticle.keyTakeaways.map((t, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-teal-950">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-slate-100">
                <Tag className="w-4 h-4 text-slate-400 mr-1" />
                {activeArticle.tags.map((tag, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="pt-6 flex justify-end">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-6 py-2.5 rounded-xl bg-teal-700 text-white font-bold text-xs"
                >
                  Close Article
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
