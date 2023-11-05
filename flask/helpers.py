import openai
from os import environ as env

# API KEY
openai.api_key = env.get("OPENAI_API_KEY")


def get_response(req):
    completion = openai.Completion.create(
        model="gpt-3.5-turbo-instruct",
        prompt=f"Your job is to explain this: {req} using very easy examples, keep it very short and as brief as possible.",
        max_tokens=1000,
        temperature=0
    )

    return completion.choices[0].text
