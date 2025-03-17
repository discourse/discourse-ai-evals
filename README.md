### Instructions

This repo is not a plugin, and is meant to be used in conjunction with [Discourse AI](https://github.com/discourse/discourse-ai) plugin.

See https://github.com/discourse/discourse-ai?tab=readme-ov-file#evals for more information.


#### Prompts

Each eval config may contain a single or multiple test cases. Attributes (prompts, messages, followups) will be singular or plural accordingly. 

Single test case example, see 
- https://github.com/discourse/discourse-ai-evals/blob/main/tool_calls/tool_calls_with_no_tool.yml  
Multiple test case example, see 
- https://github.com/discourse/discourse-ai-evals/blob/main/translate/translate_topic_title.yml (with judge)
- https://github.com/discourse/discourse-ai-evals/blob/main/tool_calls/tool_call_chains.yml (with multiple followups)
