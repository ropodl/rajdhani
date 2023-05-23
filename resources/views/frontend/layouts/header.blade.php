<midbar date="{{ nepalidate(now()) }}"
    :ads="{{ !empty($headerAds) ? json_encode($headerAds['advertisement']) : 'false' }}">
</midbar>
<div style="position:sticky;top:0;z-index: 99">
    <navbar :provinces="{{ json_encode($provinces) }}" :categories="{{ json_encode($headerCats) }}"
        :tags="{{ json_encode($tags) }}">
    </navbar>
    <div id="readProgress"></div>
</div>
