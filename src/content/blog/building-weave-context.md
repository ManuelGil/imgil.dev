---
title: 'Building Weave Context'
description: 'Some reflections on LLM Wiki, knowledge construction, and the role of the human component in knowledge repositories.'
pubDate: 2026-08-29
author: 'Manuel Gil'
tags: ['Weave Context', 'LLM Wiki', 'knowledge', 'LLM', 'open source']
keywords: 'Weave Context, LLM Wiki, knowledge, LLM, knowledge repositories, Open Knowledge Format, OSS'
---

I have been working for months on an ecosystem of tools called Weave Context, and I kept delaying its release because the area of knowledge I was working with as a framework is still very empirical from certain points of view.

It is about LLM Wiki, but I have to explain it better.

LLM Wiki comes from a publication by Andrej Karpathy about how persistent memory for LLM models can be generated in a way that I find very elegant, since it eliminates heavy infrastructure, RAG implementations, fine-tuning processes, etc.

One of the areas where I think it can provide the most value is when sharing a project with business areas that have product knowledge different from the areas that generate code.

Why is this important to me?

As an OSS contributor for several years, many of the contributions I received, and sometimes the most important ones, were rarely code. They were often translations, bug reports, feature requests, and many of the people who contributed were not developers, but people genuinely interested in my work.

If at some point I could work with a document repository separate from the code, where users could contribute ideas, that would be impressive.

The biggest problem with being a SOLO dev, without an organization behind me, is the limitation of time and resources to train users in building the software they want.

With this context, if we move this idea to an organizational level, an organization has much more suitable policies for generating and reviewing knowledge, and it would be reasonable and enriching to build software from this perspective as well.

This is where the first point of divergence appears regarding what those implementing the LLM Wiki concept are proposing.

On one side, we already have a first standard proposed by Google, Open Knowledge Format (OKF), whose value proposition is to be vendor independent and keep documents in Markdown format, independent from infrastructure or consumers such as Obsidian.

However, before that, concepts from wikis and used by Obsidian had already been used, for example: wikilinks.

Many content creators have created their second brains using these concepts of wikilinks and Obsidian manually and, sometimes, very consciously, reviewing, updating, and keeping their knowledge repositories alive.

On the other hand, although from the previous point of view the authorship of knowledge belongs to whoever builds or keeps the knowledge alive, there is a different opinion in other places where documentation should exist for and only for LLM models (LLM-strict).

The first point of view proposes a position closer to LLM-first, where the content is optimized for models, but this does not mean that the knowledge is disconnected from the human component, and constant auditing is maintained.

The second approach is one where the review is intended to be automated in such a way that the human component is removed from the equation and all tasks and language are delegated solely to LLM models.

This second approach can be stronger, removing the human component from much of the creative process. It can even lead to automating code review processes, completely removing the human component.

In some cases, this vision also imposes heavy infrastructure on a model that was lightweight from the beginning.

To some extent, from the outside, the process can look like a process where machines build for machines.

The empirical part is that, because this field is very new, there is no consensus about how to measure the generation of knowledge repositories. There is no established KPI, there are no guidelines, and this makes the automation process more opaque.

These reasons led me to delay the release of the tools that make up the ecosystem, since it was very difficult to decide what metrics I wanted to measure.

I only had one thing clear.

For me, the human component was the most important thing.

However, as I worked on this ecosystem, I kept learning and trying to answer the same questions: How is knowledge constructed? What does knowledge look like visually? Is the way we consume knowledge really the same as the way LLM models consume it?

At this point I managed to launch my ecosystem on Product Hunt and, although it did not receive the recognition I expected, I hope to return to this work soon after taking a small break to work on other projects.

If you would like to learn more about this ecosystem, you can find the repositories directly on my GitHub profile:

- [Weave Context VS Code Extension](https://github.com/ManuelGil/vscode-weave-context)
- [Weave Context Skills](https://github.com/ManuelGil/weave-context-skills)
- [Weave Context Dashboard](https://github.com/ManuelGil/weave-context-dashboard)
