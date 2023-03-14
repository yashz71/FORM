from django.db import models
from wagtail.images.edit_handlers import ImageChooserPanel
from wagtail.core.models import Page

class AboutUsPage(Page):
    background_image = models.ForeignKey(
        'wagtailimages.Image',
        blank=False,
        null=True,
        related_name='+',
        help_text='The  background image',
        on_delete=models.SET_NULL,
    )
    content_panels = Page.content_panels + [
        ImageChooserPanel("background_image"),
    ]
