---
title: Book-production tech and ops
---

# Book-production technology

Our clients' technical staff often need to know exactly *how* we make their books. While we're very experienced with traditional, InDesign-based workflows, we have also developed our own tools and processes, including an open-source digital-first workflow.

## Workflow

Unless a design-heavy book calls for a traditional InDesign workflow, our standard process is:

1. Convert text to markdown and prepare images
2. Create CSS stylesheet(s) for each output format
3. Convert the markdown to HTML
4. Convert the HTML to output formats, e.g. print PDF, web PDF, epub, DocBook
5. Run validation/preflight checks as appropriate.

As a framework for this, we use the open-source [Electric Book Workflow](https://github.com/electricbookworks/electric-book-workflow).

## File management

We have three tools for managing files and projects, and we share these spaces with clients who're willing and able (not all clients are web-happy enough to join us here):

1. *File hosting*: We use [Dropbox for Business](https://www.dropbox.com/business/tour), which gives us world-class file-management features. We create a dedicated folder in which we deliver final output files to you. You get the link to that folder so that you can access and download from it at any time. Guard the link, since anyone with it can access the folder. (We can change the link if necessary.)

2. *Source content and code*: We use [GitHub](https://github.com) and/or [Bitbucket](http://bitbucket.org) (depending on the nature of the project) for storage and version-control of markdown, HTML, and CSS. If you have an account on those services, we'll give you read access to your repositories so you can always see and retrieve your master source files.

3. *Project management*: We use [Trello](http://trello.com) to keep track of projects. If you have a Trello account, let us know your username and we'll add you to your board, where you can track project progress and collaborate.

## Pre-flight checks

Every client (or printer) has different requirements for preflight checks. If you have specific checks you want done, we can create a preflight profile for your books.
