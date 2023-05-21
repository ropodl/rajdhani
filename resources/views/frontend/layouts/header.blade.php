<midbar date="{{ nepalidate(now()) }}"
    :ads="{{ !empty($headerAds) ? json_encode($headerAds['advertisement']) : 'false' }}">
</midbar>
<navbar :provinces="{{ json_encode($provinces) }}" :categories="{{ json_encode($headerCats) }}"
    :tags="{{ json_encode($tags) }}"></navbar>
