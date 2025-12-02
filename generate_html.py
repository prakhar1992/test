#!/usr/bin/env python3

import os

def generate_html_file(filename="prakhar.html", content="Prakhar", output_dir="."):
    """Generates an HTML file with the specified content.

    Args:
        filename (str): The name of the HTML file to create.
        content (str): The content to put in the body of the HTML.
        output_dir (str): The directory to save the HTML file.
    """
    try:
        filepath = os.path.join(output_dir, filename)
        html_content = f"""<!DOCTYPE html>
<html>
<head>
<title>{content}</title>
</head>
<body>
{content}
</body>
</html>"""

        with open(filepath, "w") as f:
            f.write(html_content)
        print(f"HTML file generated successfully: {filepath}")
    except Exception as e:
        print(f"Error generating HTML file: {e}")

if __name__ == "__main__":
    generate_html_file()
