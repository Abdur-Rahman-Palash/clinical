'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const blogPosts = {
    'understanding-anxiety': {
        title: 'Understanding Anxiety: What Your Nervous System Is Trying to Tell You',
        excerpt: 'Anxiety isn\'t the enemy — it\'s a signal. In this in-depth guide, we explore the neuroscience of anxiety, why it shows up, and evidence-based strategies for working with it rather than against it.',
        category: 'Anxiety',
        readTime: '9 min read',
        date: 'February 12, 2026',
        author: 'Dr. Sarah Mitchell',
        content: `
# Understanding Anxiety: What Your Nervous System Is Trying to Tell You

Anxiety affects millions of people worldwide, yet it remains one of the most misunderstood mental health experiences. As a therapist, I've seen countless clients transform their relationship with anxiety once they understand what's really happening in their minds and bodies.

## What Is Anxiety, Really?

Contrary to popular belief, anxiety isn't something to be eliminated — it's a protective mechanism that's evolved over millions of years. Your nervous system creates anxiety to keep you safe from perceived threats. The problem isn't anxiety itself, but when this system becomes overactive or misfires in situations where you're actually safe.

## The Neuroscience Behind Anxiety

When you experience anxiety, your amygdala (the brain's threat detection center) activates your sympathetic nervous system, triggering the "fight, flight, or freeze" response. This releases stress hormones like cortisol and adrenaline, preparing your body to face danger.

Physical symptoms you might notice:
- Increased heart rate
- Rapid breathing
- Muscle tension
- Sweating
- Digestive changes

These aren't signs that something is wrong with you — they're signs that your body's protection system is working exactly as designed.

## Common Triggers and Patterns

Through my work with clients, I've identified several common patterns that trigger anxiety:

### 1. **Future-Thinking and Catastrophizing**
Your mind creates elaborate scenarios about what could go wrong, activating your anxiety response to events that haven't (and may never) happen.

### 2. **Perfectionism and Fear of Failure**
The belief that you must be perfect creates constant pressure and fear of making mistakes.

### 3. **People-Pleasing and Boundary Issues**
Difficulty saying no or setting boundaries can lead to overwhelm and anxiety about disappointing others.

### 4. **Past Trauma and Learned Responses**
Previous experiences can create neural pathways that automatically trigger anxiety in similar situations.

## Evidence-Based Strategies for Managing Anxiety

### Cognitive Behavioral Therapy (CBT) Approaches

**Thought Records**: Challenge anxious thoughts by examining the evidence for and against them. Ask yourself:
- What's the evidence this thought is true?
- What's the evidence this thought is false?
- What's a more balanced perspective?

**Behavioral Experiments**: Test your anxious predictions by gradually facing feared situations in manageable steps.

### Mindfulness-Based Techniques

**4-7-8 Breathing**: Inhale for 4 counts, hold for 7, exhale for 8. This activates your parasympathetic nervous system, the "rest and digest" response.

**Body Scan Meditation**: Systematically bring awareness to different parts of your body, noticing sensations without judgment.

### Somatic Approaches

**Progressive Muscle Relaxation**: Tense and release different muscle groups to release stored tension and increase body awareness.

**Grounding Techniques**: Use your five senses to bring yourself back to the present moment when anxiety spikes.

## When to Seek Professional Help

While some anxiety is normal, consider seeking support if:
- Anxiety interferes with daily functioning
- You're avoiding important activities due to anxiety
- Physical symptoms are persistent and distressing
- You're using unhealthy coping mechanisms
- Anxiety is affecting your relationships

## The Path Forward

Understanding anxiety is the first step toward transforming your relationship with it. Remember that healing isn't about eliminating anxiety — it's about developing the skills to work with it effectively.

Therapy can provide you with personalized strategies, support, and guidance as you learn to navigate anxiety with confidence and resilience.

---

*This article is for informational purposes only and doesn't substitute for professional mental health care. If you're struggling with anxiety, consider reaching out to a qualified mental health professional.*
        `,
        tags: ['anxiety', 'neuroscience', 'cognitive behavioral therapy', 'mindfulness', 'somatic therapy'],
    },
    'gift-of-therapy': {
        title: 'The Gift of Therapy: Why Asking for Help Is Strength',
        excerpt: 'Cultural myths around self-reliance keep many people from seeking the support they deserve. Here\'s how to reframe asking for help.',
        category: 'Self-Care',
        readTime: '5 min read',
        date: 'Feb 5, 2026',
        author: 'Dr. Sarah Mitchell',
        content: `
# The Gift of Therapy: Why Asking for Help Is Strength

In a culture that prizes independence and self-reliance, seeking therapy can feel like admitting defeat. Nothing could be further from the truth.

## The Myth of Self-Reliance

We're taught that strong people handle problems alone. This myth creates unnecessary suffering and prevents many from accessing the support that could transform their lives.

## What Actually Makes Us Strong

True strength isn't about never needing help — it's about having the courage to reach out when we do. It's about recognizing our humanity and embracing the wisdom that comes from others' perspectives.

## How Therapy Builds Resilience

Therapy provides:
- A safe space to explore challenges
- Professional guidance and tools
- Objective feedback
- Support through difficult transitions
- Skills for lifelong mental health

## Redefining Success

Success isn't about avoiding struggle — it's about how we navigate it. Those who seek therapy are often the most successful in creating lasting change because they're willing to be vulnerable and learn.

---

*If you're considering therapy, take it as a sign of your strength and wisdom. You deserve support on your journey.*
        `,
        tags: ['therapy', 'self-care', 'strength', 'vulnerability', 'personal growth'],
    },
    'attachment-styles': {
        title: 'Attachment Styles & How They Shape Your Relationships',
        excerpt: 'Our earliest bonds leave blueprints for how we connect throughout life. Understanding your attachment style is the first step to healthier relationships.',
        category: 'Relationships',
        readTime: '7 min read',
        date: 'Jan 28, 2026',
        author: 'Dr. Sarah Mitchell',
        content: `
# Attachment Styles & How They Shape Your Relationships

Our earliest experiences with caregivers create lasting patterns that influence how we connect with others throughout our lives. These attachment styles aren't fixed — with awareness and intention, we can develop more secure ways of relating.

## The Four Attachment Styles

### Secure Attachment
- Feels comfortable with intimacy and independence
- Communicates needs effectively
- Trusts others and themselves
- Can handle conflict constructively

### Anxious-Preoccupied Attachment
- Craves closeness but fears abandonment
- May seem "clingy" or demanding
- Struggles with self-worth without validation
- Often worries about relationship stability

### Dismissive-Avoidant Attachment
- Values independence above all
- May seem emotionally distant
- Struggles with vulnerability
- Deactivates attachment needs

### Fearful-Avoidant Attachment
- Desires connection but fears it
- May send mixed signals
- Struggles with trust
- Can appear hot and cold

## How Attachment Develops

Your attachment style formed through:
- Early caregiver responsiveness
- Consistency of emotional support
- How your needs were met
- Family patterns of relating

## Moving Toward Security

The good news? Attachment styles can evolve through:
- Therapy and self-reflection
- Secure relationships with partners/friends
- Mindfulness of your patterns
- Practicing new ways of connecting

## Building Secure Relationships

Regardless of your style, you can develop more secure attachment by:
- Learning to identify and express needs
- Practicing healthy boundaries
- Developing self-soothing skills
- Choosing partners who support your growth

---

*Understanding your attachment patterns is the first step toward creating the fulfilling relationships you deserve.*
        `,
        tags: ['attachment', 'relationships', 'psychology', 'self-awareness', 'emotional intelligence'],
    },
    'mindfulness-emotions': {
        title: 'A Mindfulness Practice for Difficult Emotions',
        excerpt: 'When emotions feel overwhelming, this simple mindfulness exercise can help you create space between sensation and reaction.',
        category: 'Mindfulness',
        readTime: '4 min read',
        date: 'Jan 20, 2026',
        author: 'Dr. Sarah Mitchell',
        content: `
# A Mindfulness Practice for Difficult Emotions

When difficult emotions arise, our instinct is often to push them away or get swept away by them. Mindfulness offers a third path: being with our emotions with awareness and compassion.

## The RAIN Practice

This simple four-step mindfulness technique can help you work with any difficult emotion:

### R - Recognize
Notice what's happening without judgment. "This is anxiety." "This is grief." "This is anger."

### A - Allow
Let the emotion be here without trying to fix or change it. Give yourself permission to feel what you're feeling.

### I - Investigate
Get curious about the emotion's physical sensations, thoughts, and energy. Where do you feel it in your body? What thoughts accompany it?

### N - Nurture
Offer yourself the same compassion you'd offer a friend. "This is hard. I'm here with you."

## Step-by-Step Practice

1. **Find a comfortable position** and take three deep breaths
2. **Name the emotion** you're experiencing
3. **Scan your body** for where you feel it most strongly
4. **Breathe into that area** with gentle curiosity
5. **Place a hand on your heart** or wherever you feel the emotion
6. **Speak kindly to yourself** as you would to a loved one

## Why This Works

RAIN works because it:
- Creates space between emotion and reaction
- Engages your thinking brain instead of emotional brain
- Builds self-compassion and emotional resilience
- Helps emotions move through instead of getting stuck

## Practice Tips

- Start with small emotions before tackling big ones
- Practice daily, even when emotions aren't intense
- Be patient — this is a skill that develops over time
- Consider working with a therapist for deeper emotional work

---

*Regular mindfulness practice can transform your relationship with all your emotions, creating greater peace and resilience.*
        `,
        tags: ['mindfulness', 'emotional regulation', 'self-compassion', 'meditation', 'mental health'],
    },
    'depression-sadness': {
        title: 'Depression vs. Sadness: Knowing the Difference',
        excerpt: 'Everyone feels sad sometimes, but clinical depression is something different. Learn the key distinctions and when it might be time to seek support.',
        category: 'Depression',
        readTime: '6 min read',
        date: 'Jan 14, 2026',
        author: 'Dr. Sarah Mitchell',
        content: `
# Depression vs. Sadness: Knowing the Difference

Understanding the distinction between normal sadness and clinical depression is crucial for knowing when to seek professional help. While both are valid human experiences, they require different approaches.

## Normal Sadness

Sadness is a natural emotional response to:
- Loss or disappointment
- Difficult life events
- Hurt feelings
- Unmet expectations

**Characteristics of sadness:**
- Comes and goes in waves
- Connected to specific events
- Doesn't completely disrupt daily functioning
- Allows for moments of joy or relief
- Gradually lessens with time and support

## Clinical Depression

Depression is a medical condition that affects:
- Mood, energy, and motivation
- Sleep, appetite, and concentration
- Self-worth and hope for the future
- Interest in previously enjoyed activities

**Characteristics of depression:**
- Persistent for weeks or months
- Not always connected to specific events
- Significantly impacts daily functioning
- Blocks ability to feel pleasure
- May require professional treatment

## Key Differences

| Aspect | Sadness | Depression |
|---------|----------|------------|
| Duration | Hours to days | Weeks to months |
| Triggers | Specific events | May have no clear trigger |
| Functioning | Mostly intact | Significantly impaired |
| Self-talk | "This hurts" | "Nothing matters" |
| Physical symptoms | Mild | Sleep/appetite changes |
| Relief | Possible moments | Rare moments of relief |

## When to Seek Help

Consider professional support if you experience:
- Low mood for more than 2 weeks
- Loss of interest in activities
- Changes in sleep or appetite
- Difficulty concentrating
- Feelings of worthlessness
- Thoughts of self-harm

## Treatment Options

Depression is highly treatable through:
- Psychotherapy (CBT, interpersonal therapy)
- Medication when appropriate
- Lifestyle changes (exercise, nutrition)
- Support groups and community
- Mindfulness and self-compassion practices

## You're Not Alone

Depression affects millions of people. Seeking help is a sign of strength, not weakness. With proper treatment, most people experience significant improvement.

---

*If you're experiencing symptoms of depression, please reach out to a mental health professional or your primary care provider.*
        `,
        tags: ['depression', 'mental health', 'self-care', 'treatment', 'emotional wellness'],
    },
    'somatic-therapy': {
        title: 'The Body Keeps the Score: An Introduction to Somatic Therapy',
        excerpt: 'Trauma lives in the body as much as the mind. Discover how body-based approaches complement traditional talk therapy for deeper healing.',
        category: 'Trauma',
        readTime: '8 min read',
        date: 'Jan 6, 2026',
        author: 'Dr. Sarah Mitchell',
        content: `
# The Body Keeps the Score: An Introduction to Somatic Therapy

Trauma isn't just stored in our memories — it's stored in our bodies. Somatic therapy recognizes that healing requires working with both mind and body.

## What is Somatic Therapy?

Somatic therapy approaches healing through the body, recognizing that:
- Trauma creates physical patterns and tensions
- Emotions have distinct physical signatures
- The body holds wisdom about healing
- Movement and sensation can access stored trauma

## The Science Behind Somatic Approaches

Research shows that trauma:
- Activates the nervous system's threat response
- Creates chronic muscle tension and patterns
- Affects breathing, posture, and movement
- Can be released through body-based work

## Key Somatic Therapy Modalities

### Somatic Experiencing (SE)
- Focuses on releasing traumatic shock from the body
- Works with nervous system regulation
- Uses gentle awareness of bodily sensations
- Helps complete thwarted threat responses

### Sensorimotor Psychotherapy
- Integrates body awareness with talk therapy
- Works with movement, posture, and sensation
- Addresses developmental and shock trauma
- Emphasizes resource building

### Hakomi Method
- Uses mindfulness of bodily experience
- Explores core beliefs through body wisdom
- Works with present-moment experience
- Emphasizes loving presence

## What to Expect in Somatic Therapy

Sessions may include:
- Tracking bodily sensations
- Gentle movement experiments
- Breath work and nervous system regulation
- Exploring posture and movement patterns
- Developing resources for regulation

## Benefits of Somatic Approaches

- Releases trauma stored in the body
- Improves nervous system regulation
- Increases body awareness and intuition
- Complements traditional talk therapy
- Can access pre-verbal trauma

## Is Somatic Therapy Right for You?

Consider somatic therapy if you:
- Have experienced trauma or overwhelming stress
- Notice physical symptoms with emotional distress
- Feel disconnected from your body
- Have tried talk therapy with limited results
- Want to explore healing through the body

## Getting Started

1. **Find a qualified somatic therapist** with proper training
2. **Start slowly** — body work can be intense
3. **Practice self-regulation** between sessions
4. **Trust your pace** — healing isn't linear
5. **Integrate with other approaches** as needed

---

*Somatic therapy offers a powerful pathway to healing that honors the wisdom of your body as well as your mind.*
        `,
        tags: ['somatic therapy', 'trauma', 'body-based therapy', 'nervous system', 'healing'],
    },
    'setting-boundaries': {
        title: 'Setting Boundaries Without Guilt: A Practical Guide',
        excerpt: 'Boundaries aren\'t walls — they\'re invitations to healthier connection. This guide walks you through how to set them with clarity and compassion.',
        category: 'Relationships',
        readTime: '6 min read',
        date: 'Dec 20, 2025',
        author: 'Dr. Sarah Mitchell',
        content: `
# Setting Boundaries Without Guilt: A Practical Guide

Boundaries are one of the most misunderstood concepts in relationships. Many people believe boundaries push others away, but healthy boundaries actually create the foundation for deeper, more authentic connection.

## What Boundaries Really Are

Boundaries are:
- Guidelines for how you want to be treated
- Limits that protect your energy and well-being
- Communication of your needs and values
- Acts of self-respect and self-care

Boundaries are NOT:
- Walls to keep people out
- Ways to control others
- Punishments or threats
- Signs you don't care

## Why We Struggle with Boundaries

Common barriers include:
- Fear of disappointing others
- Guilt around prioritizing ourselves
- Not knowing what we need
- Worrying about conflict
- Cultural or family conditioning

## Types of Boundaries

### Physical Boundaries
- Personal space and touch
- Privacy and belongings
- Time and energy limits
- Physical needs (sleep, food, rest)

### Emotional Boundaries
- Not taking responsibility for others' feelings
- Not sharing when not ready
- Protecting emotional energy
- Separating your feelings from others'

### Mental Boundaries
- Your thoughts, beliefs, and values
- Not taking on others' opinions as truth
- Protecting your mental energy
- Making your own decisions

### Time Boundaries
- How you spend your time
- Availability to others
- Work-life balance
- Personal time protection

## How to Set Boundaries

### 1. Identify Your Limits
Notice when you feel:
- Resentful or overwhelmed
- Anxious or drained
- Taken advantage of
- Losing yourself in relationships

### 2. Start Small
Practice with low-stakes situations:
- "I need some time to think about that"
- "I can't commit to that right now"
- "I'm not available for that"

### 3. Use Clear, Kind Language
"I" statements work best:
- "I feel overwhelmed when..."
- "I need to protect my energy for..."
- "I'm not comfortable with..."

### 4. Prepare for Pushback
Some people may test your boundaries:
- Stay calm and consistent
- Don't over-explain or justify
- Hold your ground respectfully
- Remember you're not responsible for their reaction

## Common Boundary Challenges

### Guilt
Remember: Setting boundaries is healthy, not selfish. You can't pour from an empty cup.

### Fear of Conflict
Healthy boundaries often prevent bigger conflicts by addressing issues early.

### Worrying About Others' Feelings
Others are responsible for their feelings. You're responsible for yours.

## Boundary Examples

**With family:**
- "I love visiting, but I need to leave by 8pm"
- "I can't discuss that topic right now"
- "I need some alone time this weekend"

**At work:**
- "I can take on that project, but not until next week"
- "I don't check emails after 6pm"
- "I need more information before I can commit"

**In friendships:**
- "I can't lend money, but I'm here to listen"
- "I need some space right now"
- "That topic feels too personal to discuss"

## The Benefits of Good Boundaries

- Increased self-respect and confidence
- Better, more authentic relationships
- More energy for what matters
- Less resentment and burnout
- Clearer communication

---

*Setting boundaries is a skill that improves with practice. Be patient with yourself as you learn to advocate for your needs.*
        `,
        tags: ['boundaries', 'relationships', 'self-care', 'communication', 'personal growth'],
    },
};

export default function BlogPostPage() {
    const params = useParams();
    const slug = params.slug as string;
    const post = blogPosts[slug as keyof typeof blogPosts];

    if (!post) {
        return (
            <div style={{ paddingTop: '6rem', paddingBottom: '6rem', textAlign: 'center' }}>
                <h1>Article not found</h1>
                <Link href="/blog" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>
                    Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <div style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                {/* Back Navigation */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ marginBottom: '2rem' }}
                >
                    <Link
                        href="/blog"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: 'var(--sage-dark)',
                            textDecoration: 'none',
                            fontWeight: 500,
                        }}
                    >
                        <ArrowLeft size={16} />
                        Back to Articles
                    </Link>
                </motion.div>

                {/* Article Header */}
                <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <header style={{ marginBottom: '3rem' }}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <span className="tag">{post.category}</span>
                        </div>
                        
                        <h1 style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 600,
                            color: 'var(--navy)',
                            lineHeight: 1.2,
                            marginBottom: '1.5rem',
                        }}>
                            {post.title}
                        </h1>

                        <p style={{
                            fontSize: '1.2rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.7,
                            marginBottom: '2rem',
                        }}>
                            {post.excerpt}
                        </p>

                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '1.5rem',
                            fontSize: '0.9rem',
                            color: 'var(--text-muted)',
                            borderTop: '1px solid var(--border)',
                            borderBottom: '1px solid var(--border)',
                            padding: '1.5rem 0',
                        }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <User size={16} />
                                {post.author}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Calendar size={16} />
                                {post.date}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Clock size={16} />
                                {post.readTime}
                            </span>
                        </div>
                    </header>

                    {/* Article Content */}
                    <div
                        style={{
                            fontSize: '1.1rem',
                            lineHeight: 1.8,
                            color: 'var(--text-secondary)',
                        }}
                        dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>').replace(/^# /gm, '<h1>').replace(/^## /gm, '<h2>').replace(/^### /gm, '<h3>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>') }}
                    />

                    {/* Tags */}
                    <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
                        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--navy)', marginBottom: '1rem' }}>
                            Topics
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {post.tags.map((tag) => (
                                <span key={tag} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Share and Save */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '3rem',
                        paddingTop: '2rem',
                        borderTop: '1px solid var(--border)',
                    }}>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Share2 size={16} />
                                Share
                            </button>
                            <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Bookmark size={16} />
                                Save
                            </button>
                        </div>
                        
                        <Link href="/booking" className="btn-primary">
                            Book a Session
                        </Link>
                    </div>
                </motion.article>

                {/* Related Articles */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    style={{ marginTop: '4rem' }}
                >
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '2rem' }}>
                        Related Articles
                    </h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '1.5rem',
                    }}>
                        {/* Add related articles here */}
                        <div className="card">
                            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '0.5rem' }}>
                                A Mindfulness Practice for Difficult Emotions
                            </h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                                When emotions feel overwhelming, this simple mindfulness exercise can help you create space.
                            </p>
                            <Link href="/blog/mindfulness-emotions" style={{ color: 'var(--sage-dark)', fontWeight: 500 }}>
                                Read More →
                            </Link>
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
