# Instagram Rewrite Task — For Pearl

## What This Is

The @drericwhitney Instagram pipeline has 100 posts. The captions are bad — they sound like a content template, not like Whit. Some have fabricated OR stories that never happened. All of them need to be rewritten in Whit's actual voice using his real experiences, real research, and real way of thinking.

## The Data

All 100 posts are in: `app/data/instagram-posts.json`

Each post has:
- `id`: 1-100
- `pillar`: questions, science, person, provocations, frame
- `caption`: THE FIELD TO REWRITE
- `hashtags`: already overhauled (keep as-is)
- `imageType`: ai, quote, or personal
- `imagePath`: already set (keep as-is)

## What Pearl Should Do

Rewrite every caption in the `instagram-posts.json` file. Every single one.

### Voice Rules

1. **Start with something real.** A real observation from the OR, a real conversation, a real moment in training, a real research finding. If Pearl doesn't know a specific memory, ask Whit — don't invent one.

2. **No fabricated patient stories.** Don't write "I had a patient who..." unless it's a real case Whit has talked about. Use what's in Pearl's memory.

3. **Find the paradox.** Every post should contain a moment where expectation met reality and they didn't match. That's what makes Whit's voice distinctive.

4. **Admit unknowing.** The most credible thing Whit does is say "I don't know." That's not weakness — it's the whole research program.

5. **Connect to research.** Every post is secretly a "this is why I study this" statement, even when it doesn't say so explicitly.

6. **Vary the length.** Not every post is a one-liner. Mix:
   - 1-2 sentence observations (40% of posts)
   - 3-5 sentence reflections (40% of posts)
   - Full paragraph narratives using REAL memories (20% of posts)

7. **Use Whit's actual vocabulary:**
   - "Nobody tells you..."
   - "That's the part that interests me"
   - "Something we don't have a measurement for"
   - "I've watched..." / "I've seen..."
   - Clinical precision (specific numbers, specific mechanisms)
   - Philosophy that grows from observation, never the reverse

8. **Test each caption:** Could a yoga teacher say this? If yes, rewrite. Does it contain a specific clinical or research detail? If no, add one. Does it end with an answer or a question? It should usually end with the question.

### Pillar-Specific Notes

**Questions (20 posts):** These should be the genuine questions that keep Whit up at night. Not rhetorical devices — real unknowns from his clinical and research work.

**Science (25 posts):** Teach something specific AND connect it to consciousness/coherence research. Not just "here's a fact" — "here's a fact and here's why it matters to what I'm studying."

**Person (20 posts):** 12 of these are waiting on personal photos and don't have images yet. Write the captions anyway using what Pearl knows about Whit's real life — medical school at 40, Paris, the kids, DO philosophy, Hawaii, publishing, Still You Recovery origin story, Substack. Only use REAL details from memory.

**Provocations (20 posts):** These should be the sharpest things Whit thinks. Each one should pass: "Could only a neurosurgeon who studies consciousness say this?"

**Frame (15 posts):** The larger vision — The Encoded Human, The Decoded Human, Still You Recovery, the research program. These connect the dots between projects.

### Hashtags

Already updated — keep them as-is:
- questions: `#neuroscience #neurosurgeon #brainscience #consciousnessresearch #medicalphilosophy`
- science: `#neuroscience #medicaleducation #clinicalresearch #evidencebased #sciencemadelegible`
- person: `#neurosurgeon #doctorsofinstagram #physicianlife #DOproud #surgeonlife`
- provocations: `#neuroscience #neurosurgeon #medicalperspective #neurosurgeonthoughts #brainandmind`
- frame: `#neuroscience #consciousnessstudies #futureofmedicine #scienceandphilosophy #theencodedhumanproject`

## Output

Overwrite the `caption` field for all 100 posts in `app/data/instagram-posts.json`. Then copy to `app/public/instagram-posts.json`.

## What NOT to Do

- Don't invent patient stories
- Don't invent OR memories
- Don't write generic inspiration
- Don't separate the clinical from the personal — Whit never does
- Don't use #thebodyknows anywhere
- Don't change hashtags, imageType, imagePath, or scheduledDate
