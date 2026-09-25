$ProjectPath = "D:\porti"

while ($true) {

    Set-Location $ProjectPath

    Write-Host ""
    Write-Host "========================================"
    Write-Host "Checking GitHub sync..."
    Write-Host (Get-Date)
    Write-Host "========================================"

    $changes = git status --porcelain

    if ($changes) {

        Write-Host "Changes detected. Uploading..."

        git add .

        git commit -m "Auto sync $(Get-Date -Format 'yyyy-MM-dd HH:mm')"

        git push

        if ($LASTEXITCODE -eq 0) {
            Write-Host "Successfully synced to GitHub."
        }
        else {
            Write-Host "GitHub push failed."
        }

    }
    else {
        Write-Host "No changes. Nothing to upload."
    }

    Write-Host "Next check in 2 minutes..."
    Start-Sleep -Seconds 120

}