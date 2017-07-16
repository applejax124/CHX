# CHX

CHX is a chrome extension that will enable simple regex-like commands to be used in the Chrome address bar

## Contents
+ [Installation](#Installation)
+ [Usage](#Usage)

### Installation

CHX can (in theory) build on any Chromium-extensible browser, as it uses no special dependencies.
I say "in theory" because test installs are currently only performed on Opera and Chrome (bleeding edge work is done on opera).

General installation:

1. Download the extension scripts by cloning this repository.

`git clone https://github.com/dsmith47/CHX.git`

2. Navigate to the extensions page from your browser.

3. Enable developer mode. This will vary across browsers and versions but generally you will find a checkbox that says "Enable Developer Mode."
It should be fairly self explanatory or well-documented.

4. Click "Load Unpacked Extension" to build CHX as an add-on.


### Usage

CHX commands are written in the omnibox (address bar).
In order to be processed they must be preceeded by a command character `;`

Structure of a typical CHX command:

`; <command> [arguments]`
