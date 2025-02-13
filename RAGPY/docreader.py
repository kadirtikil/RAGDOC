

from langchain_community.document_loaders import PyPDFLoader


file_dir = "~/Projects/RAGDOC/RAGPDFs/"


cv = "Lebenslauf.pdf"


loader= PyPDFLoader(file_dir + cv)
pages=[]


for page in loader.load():
    pages.append(page)



print(page)
