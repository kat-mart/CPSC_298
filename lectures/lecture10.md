# Lecture 10

## Housekeeping
- Week in World of AI
    * [AGI Concerns](https://youtu.be/teiFPBCbgIc?si=lKAn8G3ZZF7TXzym)
    * [Agent Notebooks](https://youtu.be/jKYINg2z3HU?si=EBP5QyzTc3S-DYm4)
    * [n8n Take Off](https://youtu.be/c0Dqnd4HU8w?si=OT7q7zNoUx9dAb5Z)
    * [More on GOAT & Terminal of Truth](https://youtu.be/Rp-EILOvp7I?si=Zr3KFW5KB6bw8RkG)
- Delayed quiz due date b/c of Halloween Parties
- Reminder Check Canvas for grading; Still grading last 2 assignments
- Remember to `git pull upstream master && git push`
- Reminder: Have Open AI key for remainder of semester; if CSV is not updated and do not see PRs; I review the [#continuous integration channel on Discord](https://discord.com/channels/1204850325748457543/1204856923149697045)
- Make sure your CI notifications are proper
- Reminder: Docking now at 10% per week (reviewing commits to GitHub forks)
- Check postings on CSV file for accuracy; will not receive grades unless all tasks are completed
- Review non-attendees for CSV (in class)
- Final Project Survey: n8n agent ala GOAT (will limit Open AI usage), LLM-based coding software tool chains, or other?

## Where Everyone Should Be Revisited:
- Discord Notifications with Webhook (DM me if you need the hook; Look in Discord help channel for Webhooks)
- Upstream forked and Setup on Personal Github accounts; Know Git/hub:
    * `ssh-keygen` & `ssh-add {-l}`
    * `git set upstream <branch>`
    * `git pull upstream master`
    * `git merge`
    * `git push {origin}`
    * `git checkout {-b} <branch>`
    * `ssh -vT git@github.com # check ssh key setup`
    * understand `.gitignore` and `.*` hidden files in project
    * understand `git log` and how to reset out sync repos with the `upstream`
    * if on Mac: `ssh-add --apple-use-keychain  ... && ssh-add --apple-load-keychain` otherwise:
    * `ssh-add -K ~/.ssh/.ssh`
- Pull Requests on Github, forks, and origin/upstreams synchronized.
- Basics of AI coding with V0 and setting up code on local repo; Understand how to use Aider and LLM
- Knowledge of TypeScript ecosystem with `npx`, `npm`, and NodeJS (ask AI if uncertain)
- AI Tooling: V0, Replit, Chat.dev, Copilot, Cursor, & Concepts:
    * Large Language Models (LLMs)
    * Feed forward networks (& ANNs)
    * Context Windows
    * Retrieval Augmented Generation (RAG)
    * Chain & Tree of Thought (CoT/ToT)
    * Self Taught Reasoning (STaR)
    * Tokenization and Transformer Architectures as well as Next Token Prediction
    * Mixture of Experts (MoE)
    * Agentic Approaches
    * Benchmarking, Weigths/Biases (Parameters) & Open Source Relevance (open weights, data, and models)
- API Keys setup & sample `.aider.conf.yml` in proper subdirectory
- Have me (jeffrey-l-turner) as reviewer/collaborator on Pull Requests (note Canvas will be graded once assignment complete)
- Make Sure you're information is accurate on CSV posted in Discord
- Signup for [Pythathagora](https://www.pythagora.ai) - no luck getting access so far; Recommendation: use Cursor with Pythagora
- Understand basics of complexity theory and non-deterministic algos
- Up to date on CSV file. Will place whether Open AI key assigned
- Know how to use Github to create PRs, add me as reviewer and not close until graded
- Review [Cursor Directory](https://cursor.directory/)

## Abstraction with LLMs

## How to use GPT, Aider Coding, etc. for Planning and Architecture
- Reminder on Techniques:
    * Software Architecture Diagram
    * Abstraction Levels: Top-Level Architecture, Project Organization, Modules, Front-End/Back-End, Functional Decomposition
    * Development Environment
    * Data Storage: Mutability & Access (regionalized, sharding, etc.)

## Resources:
- Channels I Follow for this Class: [Wes Roth](https://www.youtube.com/@WesRoth), [Matthew Berman](https://www.youtube.com/@matthew_berman), [David Shapiro](https://www.youtube.com/@DaveShap/videos), [Indy Dev Dan](https://www.youtube.com/@indydevdan), [Greg Isenberg](https://www.youtube.com/@GregIsenberg), [3 Blue 1 Brown](https://www.youtube.com/@3blue1brown), [AI Explained](https://www.youtube.com/@3blue1brown)
- Tools: [Aider](https://aider.chat/), [LLM](https://github.com/simonw/llm), & [uv](https://github.com/astral-sh/uv) [Data Centric](https://youtube.com/@data-centric?si=SjrEhrokPgsDoeYF) [Internet of Bugs](https://youtube.com/@internetofbugs?si=hahhYKaGX59agFjH) [The AI Grid](https://youtube.com/@theaigrid?si=ZhJcF-WMTwlFZwuP) [AI Workshop](https://youtube.com/@ai-gptworkshop?si=_yLxq63PT90ZhCa5)
- [Open AI Key Management](https://platform.openai.com/)
- [Sign up for n8n using Chapman Email](https://n8n.io)
