<script type="text/javascript">
    document.getElementById('frmSearch').onsubmit = function() {
        window.location = 'http://www.google.com/search?q=site:yoursitename.com ' + document.getElementById('txtSearch').value;
        return false;
    }
</script>
